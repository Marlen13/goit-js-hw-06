const inputText = document.getElementById("name-input");
const span = document.getElementById("name-output");

inputText.addEventListener("input", (event) => {
  if (event.currentTarget.value === " ") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = event.currentTarget.value.trim();
  }
});
