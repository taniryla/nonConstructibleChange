function nonConstructibleChange(coins) {
  // Write your code here.
  let currentHighestChange = 0;
  // sort the coins in ascending order into a sortedCoins array
  coins.sort(function (a, b) {
    return a - b;
  });

  // loop through the sortedCoins array and use reduce to tally the total
  for (const coin of coins) {
    // if the total > currentHighestChange
    if (coin > currentHighestChange + 1) return currentHighestChange + 1;
    currentHighestChange += coin;
  }
  // else continue iterating through the sortedCoins
  return currentHighestChange + 1;
}
