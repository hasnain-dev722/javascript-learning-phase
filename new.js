// console.log("this is promises");
// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a<0.5){
//     reject("no randon number is supporting you")
// }
// else{
//   setTimeout(() => {
//     console.log("yes i am done");
//     resolve("hasnain");
//   }, 3000);
// }
// });
// // console.log("this is promises");
// let prom2 = new Promise((resolve, reject) => {
//   let a = Math.random();
//   if (a < 0.5) {
//     reject("no randon number is supporting you 2");
//   } else {
//     setTimeout(() => {
//       console.log("yes i am done 2");
//       resolve("hasnain 2");
//     }, 1000);
//   }
// });
// let p3 = Promise.any([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// });

 async function getdata(){
return new Promise((resolve, reject)=>{
 setTimeout(()=>{
  reject(455)
 }, 3500);
})
}
async function getdata() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  let data = await x.json()
    console.log(data)
   return 455
  }
async function main() {
  
console.log("loading modules")

console.log("do something else")

console.log("load data")
try {
let data = await getdata()
console.log(data)
}
catch{
  console.log("program war gya")
}
console.log("process data")

 console.log("hasnain")
 console.log("abbas")
}
main()

// data.then((v)=>{



// console.log("process data")

// console.log("hasnain")
// console.log("abbas")
// })