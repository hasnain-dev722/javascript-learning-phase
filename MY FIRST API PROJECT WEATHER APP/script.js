let mybutton = document.querySelector(".btn");
let mysearch = document.querySelector(".search");
mybutton.addEventListener("click", () => {
  console.log("islamabad");
  getweather();
});

mysearch.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    console.log("islamabad");
    getweather();
  }
});
