const add = document.getElementById("add");
const sub = document.getElementById("sub");
const display = document.getElementById("display");
const reset = document.getElementById("reset");

//adding
add.addEventListener("click",() => {
  const value = Number(display.innerText);
  if (value >=100) {
    alert("number greater than 100 are not allowed");
    
  } else {
    display.innerText = value+1;
  }
});

//substeact
sub.addEventListener("click",() => {
  const value = Number(display.innerText);
  if (value > 0) {
   display.innerText = value - 1;
    
  } else {
    alert("Negative are not allowed");
  }
});

//reset value
reset.addEventListener("click",() => {
  display.innerText = 0;
});
