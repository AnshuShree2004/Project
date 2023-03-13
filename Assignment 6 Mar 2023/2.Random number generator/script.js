
const delay = 3; 

console.log(`Generating random number in ${delay} seconds...`);

// count down the time until the random number is generated
let timeRemaining = delay;
const countdownInterval = setInterval(() => {
  timeRemaining--;
  console.log(`${timeRemaining} seconds remaining...`);
  if (timeRemaining === 0) {
    clearInterval(countdownInterval);

    // generate the random number
    const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random number generated: ${randomNumber}`);
  }
}, 1000);
