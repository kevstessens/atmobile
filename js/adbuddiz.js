$(window).load(function(){
    adbuddiz.isReadyToShowAd(
        function() { alert('SDK Loaded'); },
        function() { alert('SDK Not Loaded') }
    );
    adbuddiz.showAd();
});