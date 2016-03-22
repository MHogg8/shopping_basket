var assert = require('chai').assert;
var shopping = require('../shopping_basket');

describe('Shopping Basket', function(){
  it('Should give cd value', function(){
    assert.equal(20, shopping.cd);
  });
  it('Should give vinyl value', function(){
    assert.equal(30, shopping.vinyl);
  });
  it('Should give cassette value', function(){
    assert.equal(4, shopping.cassette);
  });
});

describe('add', function(){
  it('should add a new item to the basket', function(){
    assert.deepEqual({cd: 20, vinyl: 30, cassette: 4, minidisc: 25}, add(shopping, 'minidisc', 25));
  });
});

describe('deleteIt', function(){
  it('should delete an item from the basket', function(){
    assert.deepEqual({cd: 20, vinyl: 30, cassette: 4 }, deleteIt(shopping, 'minidisc'));
  });
});

describe('total', function(){
  it('should return total of all items in basket', function(){
    assert.equal(54, total(shopping));
  });
});

describe('checkout', function(){
  it('should calaulate the final cost of the basket', function(){
    assert.equal(45, checkout(50, false));
    assert.equal(42.50, checkout(50, true));
    assert.equal(19.00, checkout(19.00, false));
    assert.equal(18.05, checkout(19.00, true));
  })
})

describe('buyOne', function(){
  it('should add buy one get one free functionality', function(){
    assert.deepEqual({cd: 20, vinyl: 30, cassette: 4, vinyl_bogof: 0}, buyOne('vinyl', shopping));
  });
});