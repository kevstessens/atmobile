var AdBuddizBridge = {
	setLogLevel: function(logLevel, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'AdBuddizBridge',
            'setLogLevel',
            [logLevel]
        ); 
    },
	setPublisherKey: function(publisherKey, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'AdBuddizBridge',
            'setPublisherKey',
            [publisherKey]
        ); 
    },
    setTestModeActive: function(logLevel, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'AdBuddizBridge',
            'setTestModeActive',
            []
        ); 
    },
    cacheAds: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'AdBuddizBridge',
            'cacheAds',
            []
        ); 
    },
    isReadyToShowAd: function() {
    	var numberOfArgument = arguments.length - 2;
    	var args = [];
    	if(numberOfArgument > 0)
    		args = [arguments[0]];
		cordova.exec(
			arguments[numberOfArgument],
            arguments[numberOfArgument + 1],
            'AdBuddizBridge',
            'isReadyToShowAd',
            args
		);
    },
    showAd: function() {
        var numberOfArgument = arguments.length - 2;
        var args = [];
        if(arguments.length > 0)
            args = [arguments[0]];
        cordova.exec(
            arguments[numberOfArgument],
            arguments[numberOfArgument + 1],
            'AdBuddizBridge',
            'showAd',
            args
        ); 
    },
}

module.exports = AdBuddizBridge;