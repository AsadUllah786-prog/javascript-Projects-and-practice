const CHARS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+[]{}<>?,./",
};
const AMBIGUOUS = "O0oIl1";

function getSettings() {
  return {
    length: Number(document.getElementById("length").value),
    upper: document.getElementById("upper").checked,
    lower: document.getElementById("lower").checked,
    numbers: document.getElementById("numbers").checked,
    symbols: document.getElementById("symbols").checked,
    excludeAmbiguous: document.getElementById("ambiguous").checked,
    pronounceable: document.getElementById("pronounceable").checked,
  };
}

function buildCharset(settings) {
  let cs = "";
  if (settings.lower) cs += CHARS.lower;
  if (settings.upper) cs += CHARS.upper;
  if (settings.numbers) cs += CHARS.numbers;
  if (settings.symbols) cs += CHARS.symbols;

  if (settings.excludeAmbiguous) {
    cs = cs
      .split("")
      .filter((c) => !AMBIGUOUS.includes(c))
      .join("");
  }
  return cs;
}

function randomInt(max) {
  const arr = new Uint32Array(1);
  window.crypto.getRandomValues(arr);
  return arr[0] % max;
}

function generatePassword(length, settings) {
  const cs = buildCharset(settings);
  if (!cs.length) return "⚠️ Select at least one character set";

  const arr = new Uint32Array(length);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (n) => cs[n % cs.length]).join("");
}

function generatePronounceable(length, settings) {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const pool = [];
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) pool.push(consonants[randomInt(consonants.length)]);
    else pool.push(vowels[randomInt(vowels.length)]);
  }
  if (settings.upper) pool[0] = pool[0].toUpperCase();
  if (settings.numbers) {
    pool[randomInt(pool.length)] =
      CHARS.numbers[randomInt(CHARS.numbers.length)];
  }
  return pool.join("").slice(0, length);
}

function estimateEntropy(pwd, settings) {
  let poolSize = 0;
  if (settings.lower) poolSize += 26;
  if (settings.upper) poolSize += 26;
  if (settings.numbers) poolSize += 10;
  if (settings.symbols) poolSize += 20;
  if (settings.excludeAmbiguous) poolSize -= AMBIGUOUS.length;

  if (settings.pronounceable) poolSize = 21 + 5; // consonants + vowels
  const entropy = (pwd.length * Math.log2(poolSize)).toFixed(2);
  return entropy;
}

function handleGenerate() {
  const settings = getSettings();
  let pwd = settings.pronounceable
    ? generatePronounceable(settings.length, settings)
    : generatePassword(settings.length, settings);

  document.getElementById("output").textContent = pwd;
  document.getElementById("entropy").textContent =
    "🔒 Entropy: " + estimateEntropy(pwd, settings) + " bits";
}
