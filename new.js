console.log("this is promises");
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5){
    reject("no randon number is supporting you")
}
else{
  setTimeout(() => {
    console.log("yes i am done");
    resolve("hasnain");
  }, 3000);
}
});
prom1.then((a) => {
  console.log(a);
}).catch((err)=>{
  console.log(err)
})
