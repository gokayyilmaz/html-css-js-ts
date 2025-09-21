"use strict";
const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error(`${i} is an odd number!`);
      }
      console.log(`${i} is and even number`);
      
    } catch (err) {
      console.error(err.name);
      console.error(err.message);
      console.error(err.stack);
    } finally {
      console.log(`Number: ${i} check is done`);
      console.log("--------------------------");
      i++;
    }
  }
};

makeError();
