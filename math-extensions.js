// Helper Functions

function randomDec(low,high){
    return Math.random()*(high-low) + low;
  }
  
  function randomInt(low,high){
    return Math.round(randomDec(low,high));
  }