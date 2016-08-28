#!/usr/bin/env node

"use strict"

//////////////////////////// EXECUTE with "./02.js" ////////////////////////////
const [, , ...comLineArgs] = process.argv
// console.log("my comLineArgs:", comLineArgs);   // command line arguments added by user after direct execution (see bottom)

if (comLineArgs.length === 0){                    // BONUS: Using an if statement we want to ...
  console.log("0")                                // BONUS: ...return 0 if no arguments are passed to the program

 } else {
 // const sum = Array.from(comLineArgs)           // not technically needed as array is created with destructuring on line 5...
 const sum = comLineArgs                          // ...so we can just aim at it directly

 // BONUS: Use Array.prototype.map to change each argument into a proper Number primitive
  .map(x => parseFloat(x))                        // parseFloat parses the string argument and returns a number (floating decimal allowed (doesn't have to be rounded/non-decimal))
  .reduce((prev, curr) => prev + curr)            // adds current number to next number, then that sum to next number, etc etc

  console.log("You entered:",comLineArgs,"\nYour sum\n=", sum)
}


/////////////////////////////////// LEARNING ///////////////////////////////////
// // At command line, enter:
// ⇒  ./05.js 1 2 4            // direct execution with arguments...
// sum= 7                      // ...sum is output!
