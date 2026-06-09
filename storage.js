let a=new Array(1,2,2,3);
a.push(7);
console.log(a);
a.pop();
console.log(a);
a.shift(2);
a.unshift();
console.log(a);
//array methods
let b=[3,4,5,6]
console.log(a.length);
let c=a.concat(b)
console.log(c)
// let d=a.reduce(((s,l)=>
//     s+l
// ),0);
let e=a.filter((s)=>
    s%2==0
)

console.log(e);
function getItem(cb){
    console.log("item got");
    cb();
}
function calc(cb){
    console.log("calculate");
    cb();
}
function pay(cb){
    console.log("payed");
cb();
}
function finish(cb){
    console.log("finish");
    cb();
}


    getItem(()=>{
        calc(()=>{
            pay(()=>{
                finish(()=>{
                    console.log("Done");
                },200)
            },300)
        },500)
    },1000)






