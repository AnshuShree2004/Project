function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      return;
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}

// example usage:
calculator(5, 3, "+"); // logs "5 + 3 = 8"
calculator(5, 3, "-"); // logs "5 - 3 = 2"
calculator(5, 3, "*"); // logs "5 * 3 = 15"
calculator(5, 3, "/"); // logs "5 / 3 = 1.6666666666666667"
calculator(5, 3, "%"); // logs "Invalid operator"

