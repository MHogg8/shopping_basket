var shoppingBasket = {
  cd: 20,
  vinyl: 30,
  cassette: 4
}

add = function(hash, key, value){
  hash[key]=value;
  return hash;
}

deleteIt = function(hash, key){
  delete hash[key];
  return hash;
}

total = function(hash){
  var total = 0; 
  for(var cash in hash){
    total += hash[cash];
  }
  return total;
}

checkout = function(total, card){
  if(total > 20 && card == true ){
    cost = total - (total * 0.15);
  }else if(total > 20 && card == false){
    cost = total - (total * 0.10);
  }else if(total < 20 && card == true){
    cost = total -(total * 0.05);
  }else cost = total;
    return cost
}

buyOne = function(key, hash){
  for(var items in hash ){
    if(items == key){
      hash[key + '_bogof']=0;
    }
  }
  return hash
}

module.exports = shoppingBasket;

