const colors = [
  "red",
  "blue",
  "green",
  "#12g45h",
  "#FF5733",
  "#FFBD33",
  "#DBFF33",
  "#75FF33",
  "#33FF57",
  "#33FFBD",
  "#000000"
];
//select the btn and color
const btn = document.getElementById("btn");
const color = document.querySelector(".color")
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}
btn.addEventListener('click',function() {
    let random = getRandomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})