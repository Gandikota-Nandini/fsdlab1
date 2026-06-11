// function s1(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("item1");
//             console.log(" s1 done")
            
//         },1000)
//     })
// }
// function s2(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("item2");
//             console.log(" s2 done")
            
//         },500)
//     })
// }
// function s3(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("item3");
//             console.log(" s3 done")
            
//         },100)
//     })
// }
// s1().then(()=>{
//     s2()}).then(()=>{
//         s3()}).then(()=>{
//             console.log("Done");
//         }
//     ).catch(()=>{
//         console.log("Error")
//     })

// let obj={
//     name:"nandu",
//     age:20,
//     city:"hyd"
// }
// let {name,city}=obj;
// console.log(name+" "+city);

// function e(a,b,...r){
//     let s=0;
//     for( let i in r){
//         s+=r[i];
//     }
//     console.log(s);

// }
// e("v",'e',1,3,5,6,6,77)

// fetch("http://jsonplaceholder.typicode.com/users") 
//   .then((r) => {
//     return r.json(); 
//   })
//   .then((data) => {
//     console.log(data); 
//   })
//   .catch((err) => {
//     console.error("Network error:", err.message);
//   });

async function f(){
try{
    let users=await fetch("https://jsonplaceholder.typicode.com/users.email");
    await users.json();
    console.log(users);
}catch(err){
    console.log(err);
}
}
f();