var assert = require('assert');
var expect = require('expect.js');
var _ = require('../loldash.js');

describe('forEach function', function() {
  it('should iterate over all elements of an array', function() {
    var arr = [1,2,3];
    var resultArr = [];

    _.forEach(arr, function(item) {
      resultArr.push(item * 2);
    });
    
    expect(resultArr).to.eql([2,4,6]);

  }) 
});
