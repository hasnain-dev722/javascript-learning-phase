let mybutton = document.querySelector(".btn")
let mybody = document.querySelector("body")
mybutton.addEventListener("click",()=>{
 if(mybody.classList.contains("lights-off")){
  mybody.classList.remove("lights-off");
  mybutton.innerText = "lights off";
 }else{
    mybody.classList.add("lights-off")
    mybutton.innerText = "lights on"
    setTimeout(function () {
      alert("your eyes are safe now");
    }, 3000);
 }
 
})
