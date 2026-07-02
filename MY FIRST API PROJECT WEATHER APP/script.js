let mybutton =document.querySelector(".btn");
let mysearch = document.querySelector(".search");
mybutton.addEventListener("click", function(){
  getweather();
  mysearch.addEventListener("keyup", function(event)){
    if(event.key === "enter"){
        getweather();
    }
  }
})