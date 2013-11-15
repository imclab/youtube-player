
/**
 * Module dependencies.
 */

var script = require('load-script');

/**
 * Player type.
 */

var type;

/**
 * Expose `player`.
 */

exports = module.exports = player;

/**
 * @see https://developers.google.com/youtube/js_api_reference (the flash version, which is chromeless)
 * @see https://developers.google.com/youtube/iframe_api_reference
 * @see https://developers.google.com/youtube/player_parameters
 */

function player(selector, opts, fn) {
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }

  exports.load(opts, function(err){
    if (err) return fn(err);
    exports.init(selector, opts, fn);
  });
}

exports.load = function(opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }

  type = opts.type || 'iframe'; // or 'flash'

  if ('flash' == type) {
    script('http://www.youtube.com/apiplayer?enablejsapi=1&version=3', fn, 'onYouTubePlayerReady');
  } else {
    script('https://www.youtube.com/iframe_api', fn, 'onYouTubeIframeAPIReady');
  }
};

exports.init = function(selector, opts, fn){
  if (!opts.events) opts.events = {};
  opts.events.onReady = onReady;

  var player = new YT.Player(selector, opts);

  function onReady(event) {
    fn(null, player = event.target);
  }
};

function loadFlash(playerId) {
  ytplayer = document.getElementById("myytplayer");
}

function onPlayerStateChange() {

}

function onPlayerError() {

}

function onPlayerPlaybackQualityChange() {

}