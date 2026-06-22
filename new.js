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

//  async function getdata(){
// return new Promise((resolve, reject)=>{
//  setTimeout(()=>{
//   reject(455)
//  }, 3500);
// })
// }
// async function getdata() {
//   // let x = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//   let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//   let data = await x.json()
//     console.log(data)
//    return 455
//   }
// async function main() {
  
// console.log("loading modules")

// console.log("do something else")

// console.log("load data")
// let data = await getdata()
// console.log(data)

// console.log("program war gya")

// console.log("process data")

//  console.log("hasnain")
//  console.log("abbas")
// }
// main()

// data.then((v)=>{



// console.log("process data")

// console.log("hasnain")
// console.log("abbas")
// })

//  function arrays (name){
//   for (let i = 0; i<name.length; i++){
//     console.log(name[i]*2)
//   }
//  }
//  let mynumber = [10, 20, 30, 40, 50]
//  arrays(mynumber)

function names (dost){
  for(let i = 0; i<dost.length; i++){
  
  if(dost[i]=== "ali"){
    console.log(`ali nu  andar anai daina`)
  }else{
    console.log(dost[i])
  }
}
}
let yar = ["hasnain", "zaibi","ali", "rizwan"]
yar.pop()
names(yar)