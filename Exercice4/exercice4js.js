function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let items = document.querySelectorAll("#liste li");

items.forEach((item) => {
  item.addEventListener("click", function () {
    this.style.color = getRandomColor();
  });
});
