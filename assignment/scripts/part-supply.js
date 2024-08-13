console.log('****** Part Supply *******');
// ***** REQUIRED FEATURES *********************************************
// For each question, be sure to use console.log statements to ensure that
// your code does what you expect!

// 1. Create a variable called 'partsNeeded' with a value of the number 40.
console.log('1. Create partsNeeded:');
let partsNeeded = 40;

// 2. Create a variable called 'supplyChanges' whose value is an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11.
console.log('2. Create supplyChanges:');
let supplyChanges = [3,5,-6,0,7,11];

// 3. Create a variable called 'secondItem' and assign it the value of the second
//    item in the 'supplyChanges' array.
console.log('3. Access the second value of supplyChanges:');
let secondItem = supplyChanges [1];
console.log (secondItem);
//console.log ('should be 5')

// 4. The last value in the 'supplyChanges' array was added by mistake.
//    Remove it from the array and store it inside a new variable called 'removedItem'.
console.log('4. Remove the last value from supplyChanges:');
supplyChanges.pop ();
console.log (supplyChanges);
//console.log ("last item above should be 7");

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Add the value 25 into supplyChanges.');
supplyChanges.push (25);


// 6. Create three new variables named 'positives', 'negatives', and
//    'zeroes' whose values are empty arrays. Then, write a for loop
//    that loops through the 'supplyChanges' array. For each iteration of
//    the loop:
//      - If the value is a positive number, push it into the 'positives' array.
//      - If the value is a negative number, push it into the 'negatives' array.
//      - If the value is a zero, push it into the 'zeroes' array.
console.log('6. Looping through supplyChanges to populate arrays with positive, negative, and zero values:');
let positives = [];
let negatives =[];
let zeros =[]
for (let index = 0; index < supplyChanges.length; index++) {
  //if then and write to various arrays above
    if (supplyChanges [index]>0) {
    positives.unshift(supplyChanges[index]);
    } // end if positive
 else if (supplyChanges [index] === 0) {
  zeros.unshift(supplyChanges[index]);
 } //end if zero
 else if (supplyChanges [index]<0){
  negatives.unshift(supplyChanges[index]);
 }
}

console.log("this is the positives array")
console.log(positives);
console.log("this is the negatives array")
console.log(negatives);
console.log("this is the zeros array")
console.log(zeros);

// ***** STRETCH GOALS *********************************************
// 7. Rewrite the 'for' loop from #6 as a 'for...of' loop. Instead of 'positives',
//    'negatives', and 'zeroes', create three new arrays named 'stretchPositives',
//    'stretchNegatives', and 'stretchZeroes'. 
console.log('7. Looping through supplyChanges to populate more arrays with positive, negative, and zero values:');
let stretchPositives = [];
let stretchNegatives =[];
let stretchZeros =[]

console.log("checking the array supply changes");
console.log(supplyChanges);

for (inventoryValue of supplyChanges){
   //if then and write to various arrays above
   if (inventoryValue>0) {
    stretchPositives.unshift( inventoryValue );
    } // end if positive
 else if (inventoryValue === 0) {
  stretchZeros.unshift( inventoryValue );
 } //end if zero
 else if (inventoryValue<0){
  stretchNegatives.unshift( inventoryValue );
 }
}

console.log("this is the stretchPositives array")
console.log(stretchPositives);
console.log("this is the stretchNegatives array")
console.log(stretchNegatives);
console.log("this is the stretchZeros array")
console.log(stretchZeros);

// 8. Create a variable called 'totalParts' and assign it a value of 0.
//    Then, write a loop that adds each value of the 'supplyChanges'
//    array to the 'totalParts' variable.
console.log('8. Looping through supplyChanges to calculate the sum:');
let totalParts = 0;
for (partValue of supplyChanges){
  totalParts=totalParts+partValue

}
console.log("sum of all parts is:")
console.log(totalParts);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. There are 572
//    parts in total, and each box holds 7 parts.
//    Create two variables:
//      1. 'parts': Set its value to 572
//      2. 'boxesFilled': Set its value to 0
//    Use a 'while' loop to keep adding parts to boxes UNTIL
//    no more boxes can be filled. When the loop is finished,
//    the value of 'parts' should reflect how many parts are
//    "left over," and the value of 'boxesFilled' should reflect
//    how many boxes were filled.
console.log('9. Filling boxes with a "while" loop');
let parts = 572
let partsStartValue = parts;
let boxesFilled = 0
while (parts-7>=0){
  parts=parts-7
  boxesFilled=boxesFilled+1
}
console.log("We have this many boxes filled" , boxesFilled);
console.log("we have this many parts left over" , parts);
console.log("this makes sense because 7 times" , boxesFilled , "is" , boxesFilled*7);
console.log("and" , partsStartValue , "less" , boxesFilled*7 , "leaves" , parts )

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    partsNeeded: typeof partsNeeded !== 'undefined' ? partsNeeded : undefined,
    supplyChanges: typeof supplyChanges !== 'undefined' ? supplyChanges : undefined,
    secondItem: typeof secondItem !== 'undefined' ? secondItem : undefined,
    removedItem: typeof removedItem !== 'undefined' ? removedItem : undefined,
    positives: typeof positives !== 'undefined' ? positives : undefined,
    negatives: typeof negatives !== 'undefined' ? negatives : undefined,
    zeroes: typeof zeroes !== 'undefined' ? zeroes : undefined,
    stretchPositives: typeof stretchPositives !== 'undefined' ? stretchPositives : undefined,
    stretchNegatives: typeof stretchNegatives !== 'undefined' ? stretchNegatives : undefined,
    stretchZeroes: typeof stretchZeroes !== 'undefined' ? stretchZeroes : undefined,
    totalParts: typeof totalParts !== 'undefined' ? totalParts : undefined,
    parts: typeof parts !== 'undefined' ? parts : undefined,
    boxesFilled: typeof boxesFilled !== 'undefined' ? boxesFilled : undefined,
  }
} catch (e) {
  // Do nothing
}
