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
server.getTweets("win")
.then(openMostRecentTweet())
.then(getPictureFromTweet())
.then(function(picture) {
    savePictureToDisk(picture);
});
```

...read like synchronous code.

```javascript
var tweets = server.getTweets("win"); // blocking
var recentTweet = tweets[0];
var pictureFromTweet = server.getPicture(recentTweet); // blocking
savePictureToDisk(pictureFromTweet);
```

The difference being that one works while the other one doesn't. 

## Promises API



## Deferred API



## Chaining Promises



## Waiting For Multiple Resolutions

