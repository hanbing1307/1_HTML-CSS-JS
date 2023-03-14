// 解构赋值之对象模型解构
// 基本
let {name, age} = {name:'孙悟空', age:18}
console.log('name =',name, 'age =',age); //name = 孙悟空 age = 18

let {a:b} = {aa:'bb'}
console.log(b);

// 可嵌套
let obj = {a:['hello', {b:'hi'}]};
let {a:[x,{y}]} = obj
console.log('x=',x, 'y=', y);  // x= hello y= undefined

// 可忽略
let obj1 = {a:['hello', {b:'hi'}]};
let {a:[x1,{ }]} = obj1
console.log('x1=', x1);  // x1= hello

// 不完全解构
let obj2 = {i: [{j: 'world'}] };
let {i: [{ j }, i ] } = obj2;
// console.log(i); //undefined
console.log(j);  // world

// 剩余运算符
let {l, m, ...rest} = {l:1, m:2, n:3, o:4};
console.log('l=',l, 'm=',m, 'rest=', rest);  // l= 1 m= 2  rest= { n: 3, o: 4 }

// 解构默认值
let {aa = 10, bb = 5} = {aa:100}
console.log(aa);  // 100
console.log(bb);  // 5

let {c1: c2 = 20, d1:d2 = 30} = {c1: 40};
console.log(c2);  // 40
console.log(d2);  // 30