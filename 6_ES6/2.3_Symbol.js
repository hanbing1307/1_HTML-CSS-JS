// Symbol是ES6引入的一种新的原始数据类型，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。

/* 
    至此，JS共有8种数据类型，分别是
    Number 、 String 、 Boolean 、 Object、 null 和 undefined ，Symbol、Bigint
    Bigint是谷歌67版本新增的
*/

/*  
    Symbol基本用法
    Symbol 函数栈不能用 new 命令，因为 Symbol 是原始数据类型，不是对象。可以接受一个字符串作为参数，为新创建的 Symbol 提供描述，用来显示在控制台或者作为字符串的时候使用，便于区分。
*/
// 基本用法
let sy = Symbol("kk");
console.log(sy);        // Symbol(kk)
console.log(typeof sy); // symbol

// 相同参数Symbol()返回的值不相等
let sy1 = Symbol("kk")
console.log(sy1 === sy); // false


// 使用场景

// 作为属性名：因为每一个Symbol都是不想等的，所以用Symbol作为属性名，可以保证属性不重名

let sy2 = Symbol("key1");

// 第一种写法
// let syObject = {};
// syObject[sy] = "kk";
// console.log(syObject);   // { [Symbol(kk)]: 'kk' }

// 第二种写法
// let syObject = {
//     [sy]: "kk"
// }
// console.log(syObject);      // { [Symbol(kk)]: 'kk' }

// 第三种写法
let syObject = {};
Object.defineProperty(syObject, sy, {value: "kk"});
console.log(syObject);   // {Symbol(key1): "kk"}

// Symbol 作为对象属性名时不能用.运算符，要用方括号。因为.运算符后面是字符串，所以取到的是字符串 sy 属性，而不是 Symbol 值 sy 属性。

let syObject1 = {};
syObject1[sy] = "kk";

console.log(syObject1[sy]);   // kk
console.log(syObject1.sy);    // undefined

/* 
    注意点
    Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到。
*/

let syObject2 = {};
syObject2[sy] = "aa";
console.log(syObject2); // { [Symbol(kk)]: 'aa' }

for (let i in syObject2) {
   console.log(i);    // 无输出
}

console.log(Object.keys(syObject));   // []
console.log(Object.getOwnPropertySymbols(syObject)); //[ Symbol(kk) ]
console.log(Reflect.ownKeys(syObject)); //[ Symbol(kk) ]