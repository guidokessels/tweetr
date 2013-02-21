/*global require:true assert:true */
var buster = require("buster"),
    tweetr = require('../lib/tweetr.js');

buster.testCase('awesome', {
    
    setUp: function(done) {
        done();
    },
    
    'no args': function(done) {
        assert.same(tweetr.awesome(), 'awesome', 'should be awesome.');
        done();
    }
    'this test fails': function(done) {
        assert.same(true, false);
        done();
    }

});
