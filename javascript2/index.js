// // console.log("hello i am conditional tutorial")
// // let age = 0;
// // // let grace = 4;
// // // age += grace
// // // console.log(age);
// // // console.log(age - grace);
// // // console.log(age + grace);
// // // console.log(age * grace);
// // // console.log(age / grace);
// // // console.log(age ** grace);
// // // console.log(age % grace);
// // if (age== 18) {
// //     console.log("you can drive");
// // }
// // else if (age==0){
// //  console.log("are you kidding")
// // }

// // else {
// //     console.log("you can not drive");
// // }

// // console.log ("i am tutorial on loops");
// // let a = 1;
// // for (let i = 0; i < 100; i++) {
// //     console.log(a+i);
// // }
// // let obj = {
// //     name: "hasnain",
// //     role: "programmer",
// //     company: "aura farming",

// // }
// // for (const key in obj) {
// //     // if (!Obj.hasOwn(obj, key)) continue;

// //     const element = obj[key];
// //     console.log(key, element)

// // }
// // for (const h of "hasnain") {
// //     console.log(h)

// // }
// // let i = 0;
// // while (i<6) {
// //     console.log (i)
// //     i++;

// // }
// // let i = 0;
// // do {
// //     console.log(i)
// //     i++;

// // } while (i<6);
// // function nice(name) {
// //     console.log("hey " + name + " you are so nice! ")
// //     console.log("hey " + name + " you are so nice! ")
// //     console.log("hey " + name + " you are so nice! ")
// //     console.log("hey " + name + " you are so nice! ")

// // }
// // nice("hasnain")
// // function sum(a,b, c=3) {
// //     // console.log(a + b)
// //     console.log(a, b, c)
// //     return a + b + c

// // }
// // result1 = sum(3 ,)
// // result2 = sum(4, 6)
// // result3 = sum(7, 6, 9)
// // console.log("the sum of these numbers is: ", result1)
// // console.log("the sum of these numbers is: ", result2)
// // console.log("the sum of these numbers is: ", result3)
// // console.log("hey hasnain you are so nice ")
// // console.log("hey hasnain you are awesome")
// // console.log("hey hasnain you are best in the world")
// // console.log("hey hasnain you are op man")
// // const func1 = (x)=>{
// //     console.log("i am function", x)
// // }
// // func1(33);
// // func1(88);
// // func1(89);

// let numb1 = "6";
// let numb2 = "8";
// let opreator = "-";
// let random = Math.random();

// let result;

// if (opreator === "+") {
//   if (random < 0.1) {
//     result = Number(numb1) - Number(numb2);
//   } else {
//     result = Number(numb1) + Number(numb2);
//   }
// } else if (opreator === "-") {
//   if (random < 0.1) {
//     result = Number(numb1) / Number(numb2);
//   } else {
//     result = Number(numb1) - Number(numb2);
//   }
// } else if (opreator === "/") {
//   if (random < 0.1) {
//     result = Number(numb1) * Number(numb2);
//   } else {
//     result = Number(numb1) / Number(numb2);
//   }
// } else if (opreator === "*") {
//   if (random < 0.1) {
//     result = Number(numb1) / Number(numb2);
//   } else {
//     result = Number(numb1) * Number(numb2);
//   }
// }
// console.log(result);

// console.log("this is string tutorial");
// let a ="hasnain";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);
// console.log(a.length);
// let realName = "hasnain";
// let freindname = "zaib";
// console.log("his name is " + realName + " and his freind name is " + freindname);
// console.log(`his name is ${realName} and his freindname is ${freindname}`);

// let b = "raisahabra";
// console.log(b.toUpperCase());
// console.log(b.toLowerCase());
// console.log(b.length);
// console.log(b.slice(1, 4));
// console.log(b.slice(1));
// console.log(b.replace("ra", "has"));
// console.log(b.concat(a));
// console.log(b.concat(a ,"abbas", "zaibi"));
// console.log(b.trim());
// console.log(b);

// let rand1 = Math.floor(Math.random() * 3);
// let first;
// if (rand1 === 0) {
//   first = "crazy";
// } else if (rand1 === 1) {
//   first = "amazing";
// } else if (rand1 === 2) {
//   first = "fire";
// }
// let rand2 = Math.floor(Math.random() * 3);
// let second;
// if (rand2 === 0) {
//   second = "engine";
// } else if (rand2 === 1) {
//   second = "garments";
// } else if (rand2 === 2) {
//   second = "foods";
// }
// let rand3 = Math.floor(Math.random() * 3);
// let third;
// if (rand3 === 0) {
//   third = "bros";
// } else if (rand3 === 1) {
//   third = "limited";
// } else if (rand3 === 2) {
//   third = "hub";
// }
// alert(`${first} ${second} ${third}`);

// let arr = [1, 2, 3, 4, 5];
// console.log (arr, typeof arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3]);
// console.log(arr.toString());
// console.log(arr.join(" and "));
// let a = [1, 2, 3, 4, 5, 6];
// let a1 = [1, 2, 3];
// let a2 =[4, 5, 6];
// let a3 =[7, 8, 9];
// console.log(a1.concat( a2, a3 ));

// let a = [1, 2, 3, 4, 5];
// for (let index = 0; index < a.length; index++) {
//   const element = a[index];
//   console.log(element);
// }

// a.forEach((value, index, arr)=> {
//   console.log(value, index, arr);
// })

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// }

// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log( element);
//   }
// }
// for (const itreator of a) {
//   console.log(itreator);

// }

// let arr = [1, 13, 4, 6, 88];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArr.push(element**2);
//   console.log(newArr);
// }
// let newArr = arr.map((e, index, array) => {
//   return e ** 2;
// });
// console.log(newArr);
// const greaterthan5 = (e) => {
//   if (e > 5) {
//     return true;
//   }
//   return false;
// };
// console.log(newArr.filter(greaterthan5));

// let arr2 = [1, 2, 3, 4, 5, 6];
// const red = (a, b) => {
//   return a+b;
// //
// }
// console.log(arr2.reduce(red));l

// let target = 5;
// let result = 1;
// for (let i = 1; i<=5; i++) {
//   result = result* i;
//   console.log(result);
// }
// let targetbill = [10, 20 , 30 ,40, 50];
// let totalBill = 0;
// for (let i= 0; i < targetbill.length; i++) {
//   totalBill =  totalBill + targetbill[i];
//   console.log(totalBill);

// }
// console.log("harry");
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "red";
// document.getElementById("redbox").style.backgroundColor = "red";
// document.querySelector(".box").style.backgroundColor = "red";
// document.querySelectorAll(".box").forEach((e) => {
//   e.style.backgroundColor = "red";
// });
// document.querySelectorAll(".box").style.backgroundColor = "red";

// function randomcolor() {
//   let randmbg = Math.floor(Math.random() * 255);
//   let randmtext = Math.floor(Math.random() * 255);
//   let boxes = document.querySelectorAll(".box");
//   boxes.forEach((e) => {
//     let randombg = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
//     e.style.backgroundColor = randombg;
//   });
// }
// randomcolor();

// function createcard(title, cName, views, monthOld, duration, thumbnail) {
//   let viewcount;
//   if (views >= 1000) {
//     viewcount = views / 1000 + "K";
//   } else if (views >= 1000000) {
//     viescount = views / 1000 + "M";
//   } else {
//     viewcount = views;
//   }
//   let container = document.querySelector("#card-holder");
//   let htmlcode = `
// <div class="box">
// <div class="thumbnail-container">
// <img src="${thumbnail}" alt="thumbnail">
//  <div class="duration">${duration}</div>
//  </div>
//  <div class="text-data">
//  <h3>${title}</h3>
//  <p> ${cName} . ${viewcount} views . ${monthOld} months ago</p>
//  </div>
//  </div>
// `;
//   container.innerHTML = container.innerHTML + htmlcode;
// }
// createcard(
//   "Sigma Web Development course - video #1",
//   "CodeWithHasnain",
//   560000,
//   4,
//   "31:20",
//   "hasnain.pngg.jfif",
// );
// createcard(
//   "Sigma Web Development azab - video #3",
//   "CodeWithHasnain",
//   980000,
//   9,
//   "61:20",
//   "hasnain.pngg.jfif",
// );
// createcard(
//   "Sigma Web Development khach - video #2",
//   "CodeWithHasnain",
//   850000,
//   8,
//   "91:20",
//   "hasnain.pngg.jfif",
// );
// createcard(
//   "Sigma Web Development course - video #1",
//   "CodeWithHasnain",
//   560000,
//   4,
//   "31:20",
//   "hasnain.pngg.jfif",
// );
// let button = document.getElementById("btn");
// // https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
// // list of all mouse events
// button.addEventListener("dblclick", () => {
//   document.querySelector(".box").innerHTML =
//     "<b>yai you were clicked</b> enjoy it";
// });
// button.addEventListener("contextmenu", () => {
//   alert("dont hack us by bright clicked please");
// });
// document.addEventListener("keydown", (e) => {
//   console.log(e.key, e.keyCode);
// });
// function name(bhao) {
//     let msg1 = bhao + " tu genius ha";
//     let msg2= bhao + " mai boss hu";
//     let msg3 = bhao + " mai talented hu";

//     return  [msg1, msg2, msg3];
// }
//  let result = name("bhao");
// console.log(result[0]);
// console.log(result[1]);
// console.log(result[2]);

// function bolojani (name) {
//  return name + "jani"
// }
// let result = bolojani("hasnain")
// console.log(result);

// const bhai = (name) => name + "jani"
// let result = bhai("hasnain");
// console.log(result)

// let a = 5;
// let b = 8;
// let operator = "+";
// if (Math.random() < 0.1) {
//   if (operator === "+") {
//     console.log(a - b);
//   } else if (operator === "-") {
//     console.log(a + b);
//   } }else {
//     if (operator === "+") {
//       console.log(a + b);
//     } else if (operator === "-") {
//       console.log(a - b);
//     }
// }

// // let a = 8+3;
// // if(a>11){
// //     console.log(big)
// }
//  function checkvotinage(age){
//     if(age >=18){
//         console.log("you can vote")
//     }
//     else{
//         console.log("to young to vote")
//     }
//  }
// checkvotinage(17);
// function printevennumbers(){
//     for(let i= 1; i <=10; i++){
//         console.log(i*2)
//     }
// }
// printevennumbers()
function simplesac(num1, num2, action){
    if(action === "multiply"){
        console.log(num1 * num2);
    }
    else if(action === "divide"){
        console.log(num1/ num2)
    }
    else{
        console.log("unknown action!")
    }
}
simplesac(4, 5, "multiply")