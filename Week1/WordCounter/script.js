function getCounts(
  input,
  { ignoreSpaces = false, ignoreLineBreaks = false, trimEnds = false } = {}
) {
  let text = String(input ?? "");
  if (trimEnds) text = text.trim();

  const original = text;
  let processed = text;
  if (ignoreSpaces) processed = processed.replace(/\s/g, "");
  else if (ignoreLineBreaks) processed = processed.replace(/\n|\r/g, "");

  const characters = original.length;
  const charactersProcessed = processed.length;
  const words = original.trim().length
    ? original.trim().split(/\s+/).length
    : 0;
  const lines = original.length ? original.split(/\r?\n/).length : 0;

  return { characters, words, charactersProcessed, lines };
}

// --- DOM bindings ---
const textarea = document.getElementById("text");
const ignoreSpaces = document.getElementById("ignoreSpaces");
const ignoreLineBreaks = document.getElementById("ignoreLineBreaks");
const trimEnds = document.getElementById("trimEnds");

const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const noSpaceCount = document.getElementById("noSpaceCount");
const lineCount = document.getElementById("lineCount");

const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const shareLink = document.getElementById("shareLink");

function update() {
  const { characters, words, charactersProcessed, lines } = getCounts(
    textarea.value,
    {
      ignoreSpaces: ignoreSpaces.checked,
      ignoreLineBreaks: ignoreLineBreaks.checked,
      trimEnds: trimEnds.checked,
    }
  );
  charCount.textContent = characters;
  wordCount.textContent = words;
  noSpaceCount.textContent = charactersProcessed;
  lineCount.textContent = lines;
}

// Attach listeners
[textarea, ignoreSpaces, ignoreLineBreaks, trimEnds].forEach((el) => {
  el.addEventListener("input", update);
  el.addEventListener("change", update);
});

// Copy / Clear / Share actions
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(textarea.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
  } catch (e) {
    alert("Copy failed. You can select the text and press Ctrl+C.");
  }
});

clearBtn.addEventListener("click", () => {
  textarea.value = "";
  textarea.focus();
  update();
});

shareLink.addEventListener("click", (e) => {
  e.preventDefault();
  const params = new URLSearchParams({ t: textarea.value });
  const link = location.origin + location.pathname + "?" + params.toString();
  navigator.clipboard.writeText(link).then(() => {
    shareLink.textContent = "Link copied!";
    setTimeout(() => (shareLink.textContent = "Share"), 1200);
  });
});

// Restore from URL if present
(function initFromUrl() {
  const qs = new URLSearchParams(location.search);
  const t = qs.get("t");
  if (t) {
    textarea.value = t;
  }
  update();
})();
