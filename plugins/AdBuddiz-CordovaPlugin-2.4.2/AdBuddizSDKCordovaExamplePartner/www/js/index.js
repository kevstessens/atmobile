var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        //OPTIONAL, to get more info about the SDK behavior
        document.addEventListener('AB-didCacheAd', function() { console.log("didCacheAd") }, false);
        document.addEventListener('AB-didShowAd', function() { console.log("didShowAd"); }, false);
        document.addEventListener('AB-didFailToShowAd', function(e) { console.log(e.detail); }, false); //e.detail contains the error code
        document.addEventListener('AB-didClick', function() { console.log("didClick"); }, false);
        document.addEventListener('AB-didHideAd', function() { console.log("didHideAd"); }, false);
    },

    onDeviceReady: function() {
        adbuddiz.setLogLevel(adbuddiz.LogLevel.Info);                   // log level
        adbuddiz.setAndroidPublisherKey("TEST_PUBLISHER_KEY_ANDROID");  // replace with your Android app publisher key
        adbuddiz.setIOSPublisherKey("TEST_PUBLISHER_KEY_IOS");          // replace with your iOS app publisher key
        adbuddiz.setTestModeActive();                                   // to delete before submitting to store
        
        adbuddiz.cacheAds();                                            // start caching ads
    }
};

app.initialize();