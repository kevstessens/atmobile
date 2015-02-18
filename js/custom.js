/* Add here all your JS customizations */


function init(){
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
    adbuddiz.setAndroidPublisherKey("eb6d0751-9cd4-4b29-85eb-6470313c3ffc");
    adbuddiz.setTestModeActive();
    adbuddiz.cacheAds();
}

var id;
var listId;
var videoId;
var players = new Array();
function loadVideo(id, videoId, listId) {
    if(this.id != id) {
        var player;
        this.id = id;
        this.listId = listId;
        this.videoId = videoId;
        onYouTubeIframeAPIReady();
    }
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-'+id, {
        height: '315',
        width: '590',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    if (players[id-1] == undefined) players[id-1] = player;
    document.getElementById("player-"+id).src = document.getElementById("player-"+id).src + "&rel=0";
}

function onPlayerReady(event) {
    if (listId == undefined) event.target.playVideo();
    else event.target.loadPlaylist({list: listId, index: videoId, suggestedQuality: "small"});
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
//    the player should play for six seconds and then stop.
//        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    players[id-1].stopVideo();
}

function pauseVideo() {
    players[id-1].pauseVideo();
}



