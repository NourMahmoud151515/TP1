const paragraph = document.getElementById("paragraph");
const colorPicker = document.getElementById("colorPicker");
const fontSizeInput = document.getElementById("fontSize");
const fontSelect = document.getElementById("fontSelect");

colorPicker.addEventListener("input", function () {
  paragraph.style.color = this.value;
});

fontSizeInput.addEventListener("input", function () {
  paragraph.style.fontSize = this.value + "px";
});

fontSelect.addEventListener("change", function () {
  paragraph.style.fontFamily = this.value;
});
