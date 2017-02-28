var assert = require('assert');
var expect = require('expect.js');
var _ = require('../loldash.js');

describe('forEach function', function() {
  it('should let the iteratee function have access to each element and its index along with the entire collection', function() {
    var arr = [1,2,3];
    var resultArr = [];

    _.forEach(arr, function(item, idx, collection) {
      resultArr.push([item, idx, collection]);
    })
    expect(resultArr).to.eql([[1,0,arr],[2,1,arr],[3,2,arr]]);
  });
  it('should iterate over all elements of an array', function() {
    var arr = [1,2,3];
    var resultArr = [];

    _.forEach(arr, function(item) {
      resultArr.push(item * 2);
    });
    expect(resultArr).to.eql([2,4,6]);
  });
  it('should iterate over all elements of an object', function() {
    var obj = {one:1, two:2, three:3};
    var resultObj = {};

    _.forEach(obj, function(item, key) {
      resultObj[key] = item * 2;
    })
    expect(resultObj).to.eql({one:2, two:4, three:6});
  });
});

describe('map function', function() {
  it('should let the iteratee function have access to each element and its index along with the entire collection', function() {
    var arr = [1,2,3];
    var resultArr = [];

    _.map(arr, function(item, idx, collection) {
      resultArr.push([item, idx, collection]);
    })
    expect(resultArr).to.eql([[1,0,arr],[2,1,arr],[3,2,arr]]);
  });
  it('should iterate over all elements of an array', function() {
    var arr = [1,2,3];
    var resultArr = [];

    _.map(arr, function(item) {
      resultArr.push(item * 2);
    });
    expect(resultArr).to.eql([2,4,6]);
  });
  it('should iterate over all elements of an object', function() {
    var obj = {one:1, two:2, three:3};
    var resultObj = {};

    _.map(obj, function(item, key) {
      resultObj[key] = item * 2;
    })
    expect(resultObj).to.eql({one:2, two:4, three:6});
  });
  it('should return an array', function() {
    var arr = [1,2,3];
    var result =  _.map(arr, function(item) {
      return item
    })
    expect(result).to.be.an('array');;
  })
});

describe('filter function', function() {
  it('should return an array', function() {
    var arr = [1,2,3,4,5,6];
    var result = _.filter(arr, function(item) {
      return item % 2 === 0
    })
    expect(result).to.be.an('array');
  })
  it('should filter out odd numbers in an array', function() {
    var arr = [1,2,3,4,5,6];
    var result = _.filter(arr, function(item) {
      return item % 2 === 0
    })
    expect(result).to.eql([2,4,6]);
  })
  it('should filter out even numbers in an array', function() {
    var arr = [1,2,3,4,5,6];
    var result = _.filter(arr, function(item) {
      return item % 2 !== 0
    })
    expect(result).to.eql([1,3,5]);
  })
})


