const input = document.getElementById("font-size-control");
const span = document.getElementById("text");
input.addEventListener("input", setFontSize);

function setFontSize(event) {
  span.style.fontSize = event.currentTarget.value + "px";
  //   console.dir(input.value);
  //   console.dir(span.style.fontSize);
}
