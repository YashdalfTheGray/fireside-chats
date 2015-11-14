# Async Execution and Promises

## Callbacks

Callback functions have been used in Javascript (and other languages) to handle asynchronous operations. Simply declare a function with code that you want to run on the completion of the asynchronous task and pass it to the asynchronous function. JavaScript even lets you pass in anonymous handlers to asynchronous functions. 

## Callback Hell

As the use of asynchronous functions increases and callbacks themselves call other asynchronous functions with the data they are provided, we get into a situation that looks like the snippet below. 

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

This is affectionately called callback hell. If your code takes the shape of a closing angle bracket, something should be done to make it better.