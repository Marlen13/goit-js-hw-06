const inputElement = document.querySelector("#validation-input");
const textLength = inputElement.getAttribute("data-length");
console.dir(textLength);
inputElement.addEventListener("blur", checkLength);
function checkLength(event) {
  if (event.currentTarget.value.length === Number(textLength)) {
    if (inputElement.classList.contains("invalid")) {
      inputElement.classList.replace("invalid", "valid");
    }
  } else {
    inputElement.classList.add("invalid");
  }
}
