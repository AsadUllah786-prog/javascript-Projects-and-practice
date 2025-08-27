const input = document.getElementById("signalInput");
const resultDiv = document.getElementById("result");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");

const lights = {
  red: document.querySelector(".light.red"),
  orange: document.querySelector(".light.orange"),
  green: document.querySelector(".light.green"),
};

function clearLights() {
  Object.values(lights).forEach(light => light.classList.remove("active"));
}

function trafficSignalCheck(signal) {
  signal = String(signal).trim().toLowerCase();
  clearLights();

  if (signal === "red") {
    lights.red.classList.add("active");
    resultDiv.textContent = "🛑 Stop the vehicle!";
    resultDiv.style.color = "var(--red)";
  } else if (signal === "orange") {
    lights.orange.classList.add("active");
    resultDiv.textContent = "⚠️ Get ready to move!";
    resultDiv.style.color = "var(--orange)";
  } else if (signal === "green") {
    lights.green.classList.add("active");
    resultDiv.textContent = "✅ Drive the car!";
    resultDiv.style.color = "var(--green)";
  } else {
    resultDiv.textContent = "❌ Please enter red, orange, or green";
    resultDiv.style.color = "red";
  }
}

checkBtn.addEventListener("click", () => {
  trafficSignalCheck(input.value);
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  resultDiv.textContent = "Result will appear here...";
  resultDiv.style.color = "var(--text)";
  clearLights();
});
