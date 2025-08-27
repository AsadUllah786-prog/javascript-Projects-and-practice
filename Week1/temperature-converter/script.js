document.getElementById("convertBtn").addEventListener("click", () => {
  const scale = document.getElementById("scale").value;
  const value = parseFloat(document.getElementById("value").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(value)) {
    resultDiv.textContent = "❌ Please enter a valid number";
    resultDiv.style.color = "red";
    return;
  }

  let result;
  if (scale === "celsius") {
    let f = (value * 9) / 5 + 32;
    result = `${value}°C = ${f.toFixed(2)}°F`;
  } else if (scale === "fahrenheit") {
    let c = ((value - 32) * 5) / 9;
    result = `${value}°F = ${c.toFixed(2)}°C`;
  } else {
    result = "❌ Please select a valid scale";
  }

  resultDiv.textContent = result;
  resultDiv.style.color = "#6c63ff";
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("value").value = "";
  document.getElementById("result").textContent = "Result will appear here...";
  document.getElementById("result").style.color = "#6c63ff";
});
