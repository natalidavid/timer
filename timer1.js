const numbers = process.argv.slice(2);

let alarm = function(numbers) {
  numbers.forEach(number => { //exec f for each number
    if (!Number.isNaN(number) && number > 0) {
      // if(string > no) not - not a number & positive no
      const delay = number * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay);
    } // else it wont print
  });
};

alarm(numbers);
