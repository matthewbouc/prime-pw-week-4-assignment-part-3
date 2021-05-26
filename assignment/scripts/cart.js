console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;


// function add item to the basket array and return true after adding.
function addItem(item){
  while (basket.length < maxItems){
    basket.push(item);
    return true;
  }
  return false;
}//end addItem();
//TEST function returns true, basket array contains apple, then apple, orange
console.log('TEST - addItem() adding apple to basket', addItem( 'apple' ), basket);
console.log('TEST - addItem() adding orange to basket', addItem( 'orange' ), basket);


// function to list all items in the basket separately
function listItems(array){
  for(let x of array){
    console.log(x);
  }
}// end listItems();
//TEST function returns all items listed in basket
console.log(`TEST - listItems() listing all items in basket:`);
//function already console.logs - don't log the log.
listItems(basket);


// function to empty the basket array
function empty(array){
  while (array.length > 0){
    array.pop();
  }
}// end empty()
// TEST - clear the basket.
console.log('TEST - empty() Current basket: ', basket);
console.log('EMPTYING BASKET...');
empty(basket);
console.log('Basket is now empty, basket: ', basket);


// function to determine if basket is full
function isFull(array){
  return array.length === maxItems;
}
// TEST should log true if basket is full or false if there is space
console.log(`TEST - isFull() basket should not be full, return False: `, isFull(basket));
// TEST fill basket and retest for true
addItem('blueberry'); addItem('pickaxe'); addItem('rusty sword');
addItem('torch'); addItem('ladder');
console.log(`TEST - adding 5 items to basket to test full condition `);
listItems(basket);
console.log(`TEST - isFull(), should now return true for full: `, isFull(basket));

//UPDATED the required addItem() to max out at 5 items.
//TEST - basket is currently full with 5 items.  addition of apple and orange returned true above.  Test false condition
console.log(`TEST - addItem(), adding another item should return false: `, addItem('potion'));


// function to remove the first matching item from the basket
function removeItem(item){
  if (basket.indexOf(item) >= 0){
    return true;
  }
}
console.log('TEST - basket has item return true: ', removeItem('torch'));
