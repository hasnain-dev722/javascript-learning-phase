const mybutton = document.querySelector(".btn");
let count = 0;
mybutton.addEventListener("click", () => {
  setInterval(function () {
    count = count + 1;
    mybutton.innerHTML = count;
  }, 1000);
});
const myinput = document.querySelector("input");
myinput.addEventListener("keyup", function (event) {
  console.log("user nai dabaya:", event.key);
});
// learn keyup