console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
var basket = [];

// function add item to the basket array and return true after adding.
function addItem(item){
  basket.push(item);
  return true;
}//end addItem();
//TEST function returns true, basket array contains apple, then apple, orange
console.log('TEST - adding apple to basket', addItem( 'apple' ), basket);
console.log('TEST - adding orange to basket', addItem( 'orange' ), basket);


// function to list all items in the basket separately
function listItems(array){
  for(let x of array){
    console.log(x);
  }
}// end listItems();
//TEST function returns all items listed in basket
console.log(`TEST - listing all items in basket:`);
//function already console.logs - don't log the log.
listItems(basket);


// function to empty the basket array
function empty(array){
  while (array.length > 0){
    array.pop();
  }
}// end empty()
// TEST - clear the basket.
console.log('TEST - Current basket: ', basket);
console.log('EMPTYING BASKET...');
empty(basket);
console.log('Basket is now empty', basket);
