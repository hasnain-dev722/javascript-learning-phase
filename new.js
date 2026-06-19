console.log('this is promises');
let prom1 = new promises((resolve,reject)=>{
    setTimeout(() =>{
     console.log('yes i am done');
     resolve("hasnain")
    }, 3000);

})
prom1.then(() =>{
    console.log(a);
    
});