var makeChange = function(total) {

  var output = 0;
  var denominations = [1, 2, 5, 10, 20, 50, 100, 200];

  (function recurse (index, tot) {
    var currentDenomination = denominations[index];
    if (index === 0) {
      // support a lowest currency that is not 1
      tot % currentDenomination === 0 && output++;
      return;
    }
    while (tot >= 0) {
      recurse(index - 1, tot);
      tot -= currentDenomination;
    }
  })(denominations.length - 1, total);

  return output;
};


/* MEMOIZED SOLUTION - INCREASED EFFICIENCY*/
/*
var coins = [1, 2, 5, 10, 20, 50, 100, 200];

var takeWhile = function (arr, predicate) {
  var result = [];
  var i = 0;
  while (predicate(arr[i])) {
    result.push(arr[i++]);
  }
  return result;
};

var possibleChoices = function (total, max) {
  return takeWhile(coins, function (coin) {
    return total >= coin && coin <= max;
  });
};

var memoize = function (func, context) {
  var cache = {};
  return function () {
    if (!(JSON.stringify(arguments) in cache)) {
      cache[JSON.stringify(arguments)] = func.apply(context, arguments);
    }
    return cache[JSON.stringify(arguments)];
  };
};

var makeChange = memoize(function (total, last) {
  last = last || total;
  if (total === 0) {
    return 1;
  }
  var result = 0;
  var choices = possibleChoices(total, last);
  for (var i = 0; i < choices.length; i++) {
    var coin = choices[i];
    result += makeChange(total - coin, coin);
  }
  return result;
});
*/