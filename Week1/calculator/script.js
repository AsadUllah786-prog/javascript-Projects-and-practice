document.getElementById("calcBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("op").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "❌ Please enter valid numbers";
    resultDiv.style.color = "red";
    return;
  }

  let result;

  switch (op) {
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
      if (num2 === 0) {
        resultDiv.textContent = "❌ Cannot divide by zero";
        resultDiv.style.color = "red";
        return;
      }
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      if (result === 0) {
        console.log("Number is even");
      } else {
        console.log("Number is odd");
      }
      break;
    case "**":
      result = num1 ** num2;
      break;
    default:
      resultDiv.textContent = "❌ Invalid operator";
      resultDiv.style.color = "red";
      return;
  }

  resultDiv.textContent = `Result: ${result}`;
  resultDiv.style.color = "#4cafef";
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("op").value = "+";
  document.getElementById("result").textContent = "Result will appear here...";
  document.getElementById("result").style.color = "#4cafef";
});
