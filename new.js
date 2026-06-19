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
// console.log("this is promises");
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("no randon number is supporting you 2");
  } else {
    setTimeout(() => {
      console.log("yes i am done 2");
      resolve("hasnain 2");
    }, 1000);
  }
});
let p3 = Promise.any([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
});
