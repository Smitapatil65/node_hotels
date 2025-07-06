// // console.log("welcome to ws")
// // console.log(4)
// // console.log(4+9)
// // console.log('gg')


// // //variables let, const, var
// // let a=10
// // var r=33
// // console.log(typclseof(r))
// // var n="ho"
// // console.log(typeof(n))

// // let n=4
// // console.log(n)

// // {
// //     var a=4;
// //     let b=3;//only access in scope
// //     console.log(a)
// //     console.log(b)
// // }
// // let n=10,m=5,a='ge';
// // console.log(a)
// // console.log(m)

// // const d=10;
// // console.log(d)

// // let n=9
// // let w=`welcome ${n} hi.`
// // console.log(w)

// // let c='wscube'
// // let c1="ff"
// // let c2=`ghghg`
// // console.log(c)
// // console.log(c1)
// // console.log(c2)
// // let s=true
// // console.log(s,typeof(s))
// // console.log(s*2)

// // let n=null
// // console.log(typeof n)

// // let r
// // console.log(r)
// // console.log(typeof r)

// // let uid= Symbol ('123')
// // let cid=Symbol('123')
// // console.log(uid==cid)

// let bigInt=11111111111111111111111111111111111111n
// console.log(typeof bigInt)

// let u=['dd',10,20]
// console.log(typeof u)

// let obj={
//     'cnm':'rma',
//      rn:12
// }
// console.log(obj,typeof obj)

// let v1=10
// let v2=2
// console.log(v1**v2)

// let n=2
// let m=2
// console.log(n!=m)
// console.log(n==m)
// var unm;
// unm="dd";
// console.log(unm);
// var a=45;
// if(true)
// {
//     console.log(a);
// }
// function sol()
// {
//     var a=99;
//     console.log(a);
// }
// console.log(a);
// sol();
// var x=3;
// var x=2;
// {
// let b=4;
// }
// console.log(b);
// let a=20;
//  a=30;
//  console.log(a);
// const a=20;
// console.log(a);
// a=9;
// console.log(a);
// console.log('4'==4);
// console.log('4'===4);
// let s="hi ji \\kaise \\ho";
// let w=s.split("\\");
// console.log(w);
// console.log(w.join("-"));

// let n=function(a,b)
// {
//     return a*b;

// }
// console.log(n(3,4));

// let getex= (x,y)=>
// {
//     let ans=x**y;
//     return ans;
// }
// console.log(getex(2,10));
// let obj={
//     name:"sp",
//     "f nm":"sss",
//     age:45,
//     greet:function()
//     {
//         console.log("hiii");
//     }
// };
// console.log(obj,typeof(obj));
// obj.greet();
// let o2=obj;

// let obj={
//     nm:"peter"
// };
// // let user=Object.assign({},obj);
// let user={...obj};
// user.nm="bruse";

// console.warn(obj);
// console.warn(user);
//deep copy and shallow copy see

// let a=[1,2]
// console.log(a)
// let c=new Array('ko',4,2.1)
// console.log(c,typeof(c))
// c.push(7)
// console.log(c)
// c.pop()
// c.shift()//left element remove.
// console.log(c)
// c.unshift('f')
// console.log(c)


// console.log(c.slice(1,3))
// c.splice(1,2,'sp')
// console.log(c)

// let a=[1,2,3,4,5,6];
// let ans=a.filter((n)=>{
//     if(n%2===0)
//     {
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(ans);

// let a=[1,2,'f',4,'d'];
// let ans=a.filter((v)=>{
//     if(typeof(v)=='string')
//     {
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(ans);

// let r=[10,20,30,40];
// let ans=r.reduce((acc,cur)=>{
//     return acc+cur;
// },0);
// console.log(ans);


let r=[10,1,99,20,30,40];
// r.sort();
// console.log(r);
// console.log(r.reverse());

// v=r.indexOf(99);
// console.log(v);
r.forEach((v,i)=>{
    console.log("Number:",v,"Index:",i);
})