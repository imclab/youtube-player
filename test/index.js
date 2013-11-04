var youtubePlayer = 'undefined' == typeof window
  ? require('..')
  : require('youtube-player'); // how to do this better?

var assert = require('assert');

describe('youtubePlayer', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
