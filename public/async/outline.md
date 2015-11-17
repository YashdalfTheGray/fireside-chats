# Async Execution and Promises

## Synchronous and asynchronous execution

Synchronous execution is something that is innately familiar to every developer. You call a function, it does something, it might return a value and if it breaks, it throws an error. 

With an asynchronous function, you can't return a value because it will simply not be read in time to be useful and you can't throw an error if there is no one on the other side waiting for it to occur. So we use callbacks to help us with asynchronous execution. 

## Callbacks

Callback functions have been used in Javascript (and other languages) to handle asynchronous operations. Simply declare a function with code that you want to run on the completion of the asynchronous task and pass it to the asynchronous function. JavaScript even lets you pass in anonymous handlers to asynchronous functions. 

But asynchronous calls can't return values and can't throw errors and if the execution of one still depends on the previous call, we quickly descend into what is called "callback hell". It looks like this. 

```javascript
server.getRegion(regionId, function(region) {
    server.getProjects(region, function(projects) {
        server.getProjectDetails(projects[1], function(project) {
            server.getProjectAssets(project, function(assets) {
                server.getAssetDetails(assets[5], function(asset) {
                    server.getAssetOwner(asset, function(user) {
                        dom.updateView(user);
                    })
                })
            });
        });
    });
});
```

## Promises

This is the new standard in asynchronous operation. Promises provide a way to see asynchronous processes as synchronous processes. Asynchronous functions that use promises actually return a value, a promise for a future outcome. This can be stored in a variable and passed around. And at some point, it will either be resolved with a value or rejected with an error. 

This makes asynchronous code...

```javascript
server.getTweets('win')
.then(openMostRecentTweet())
.then(getPictureFromTweet())
.then(function(picture) {
    savePictureToDisk(picture);
});
```

...read like synchronous code.

```javascript
var tweets = server.getTweets('win'); // blocking
var recentTweet = tweets[0];
var pictureFromTweet = server.getPicture(recentTweet); // blocking
savePictureToDisk(pictureFromTweet);
```

The difference being that one works while the other one doesn't. 

## Deferred API

The deferred API is used when creating a promise. It offers 3 methods:

* `deferred.resolve(result)` - resolves the promise with result which is passed back to the client.
* `deferred.reject(reason)` - rejects the promise with an error or a reason of why it was rejected. 
* `deferred.notify(progress)` - notifies the client of the state of the promise. 

In Angular, a deferred object can be created using the `$q` library's `defer()` method. Simply assign it to a variable and use the API to control the state of the promise. The actual promise can be returned to the client by returning the `deferred.promise` object. 

```javascript
function asyncPromiseWrapper() {
    var def = $q.defer();
    asyncOperation(function(success) {
        def.resolve(success);
    }, function(error) {
        def.reject(error);
    });
    return def.promise;
}
```

## Promises API

The promises API basically offers one function - `promise.then()`. This function takes 3 parameters, one to handle the value that is passed to `deferred.resolve()`, one to handle the errors/value passed to `deferred.reject()` and one to handle values passed into `deferred.notify()`.

```javascript
server.getTweets('win').then(function(result) {
    // do something wiht the list of tweets here.
}, function(error) {
    // oh no, something went wrong.
}, function(notification) {
    // the progress of getTweets() is reported here 
});
```

This can take another form using `catch()` and `finally()`.

```javascript
server.getTweets('win').then(function(result) {
    // do something wiht the list of tweets here.
}).catch(function(error) {
    // oh no, something went wrong.
}).finally(function() {
    // this block will execute no matter what.
    // it can be used for cleanup after the promise.
}, function(notification) {
    // the progress of getTweets() is reported here 
});
```


## Chaining Promises

Promises can also be chained like successive function calls. They behave similar to perhaps the most well known code snippet in JavaScipt.

```javascript
'This is a sentence'.split(' ').reverse().join(' ');
```

Promises work in a similar fashion. A call to `promise.then()` returns another promise which is resolved when the original promise is resolved but another promise can be returned in its place. 

```javascript
server.getProfile(userId).then(function(result) {
    return server.getPosts(result);
}).then(function(posts) {
    dom.updatePosts(posts);
});
```

## Waiting For Multiple Resolutions

Multiple promises can also be processed in parallel using Angular's `$q.all()`. It takes one parameter which is an array of promises and it returns a single promise that resolves when all the promises in the array have been resolved. The result passed to the promise returned from `$q.all()` is an array of all the results from the array of promises.

```javascript
$q.all([
    asyncFunction1(), // returns 1
    asyncFunction2(), // returns 'Hello'
    asyncFunction3()  // returns { foo: 'bar', baz: qux }
]).then(function(results) {
    console.log(results);
    // will print [1, 'Hello', { foo: 'bar', baz: qux }]
});
```

## Wrapping Other Thenables and Testing

Angular's $q has a function to help with wrapping other thenables (promises from other libraries) and/or to aid in testing. Wrapping other promises with `$q.when()` isn't strictly necessary but $q integrates into the event and DOM update lifecycle which Angular can manage and schedule. Passing a variable into `$q.when()` creates a promise that resolves immediately. 

```javascript
// wrapping other thenables
var myPromise = $('.myClass').promise(); //jQuery promise
$q.when(myPromise).then(function(result) {
    // do something with the result.
    // The jQuery promise is now integrated into the
    // Anngular event lifecycle. 
});

// testing
function myAsyncFunction() {
    // assume that this function returns a promise
    // but for testing or mocking, it doesn't need
    // to return a promise but the client code still
    // expecting a promise.
    return $q.when(someReturnValue);
}
```
