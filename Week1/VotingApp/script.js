function checkEligibility() {
  let age = Number(document.getElementById("ageInput").value);
  let result = document.getElementById("result");

  if (!age) {
    result.textContent = "⚠️ Please enter your age.";
    result.style.color = "yellow";
    return;
  }

  if (age >= 18) {
    result.textContent = "✅ You are eligible to vote!";
    result.style.color = "black";
    result.style.fontSize="1.7rem";
  } else {
    result.textContent = "❌ You are not eligible to vote.";
    result.style.color = "black";
    result.style.fontSize="1.7rem";
  }
}
