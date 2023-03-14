// let 和 const 是ES6新增的两个JavaScript重要关键字
// let 声明的变量只在let命令所在的代码块中有效
// const 声明一个只读的变量，一旦声明，常量的值就不能改变


/* 
    总结：
    1、let声明的变量只在代码块内有效，而var是全局有效
    2、let只能声明一次，var可以声明多次
 */
{
    let a = 0;
    var b = 1;
    console.log(a);  // 0
    console.log(b);  // 1
}
// console.log(a);  // 报错，a is not defined
console.log(b);     // 1

// let只能声明一次，var可以声明多次
let c = 0;
// let c = 1;  // 报错，无法重新声明块范围变量c
var d = 0;
var d = 1;  // var可以重复声明，后声明的覆盖前声明的值
console.log(c); //Identifier 'a' has already been declared
console.log(d); //1


// for循环计数器很适合用 let
for (var i = 0 ; i < 10; i++){
    setTimeout(function () {
        console.log(i);  // 输出10个10
    })
}

for (let j = 0; j < 10; j++){
    setTimeout(function(){
        console.log(j); // 输出0123456789
    })
}

/* 
    不存在变量提升（严格意义上来说还是有的）
        let 不存在变量提升，var 会变量提升:
        变量 e 用 var 声明存在变量提升，所以当脚本开始运行的时候，e 已经存在了，但是还没有赋值，所以会输出 undefined。

        变量 f 用 let 声明不存在变量提升，在声明变量 a 之前，f 不存在，所以会报错。
 */
console.log(e);
var e = '我有变量提升'; //undefined

// console.log(f);
// let f = '我没有变量提升'


/* 
    const声明
        const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。
*/
// 基本用法
const PI = '3.1415926';
console.log(PI); 3.1415926

// const My_age; // 没有赋值 报错SyntaxError: Missing initializer in const declaration
 
// 暂时性死区:ES6 明确规定，代码块内如果存在 let 或者 const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域。代码块内，在声明变量 PI 之前使用它会报错。

/* 
注意要点
const 如何做到变量在声明初始化之后不允许改变的？其实 const 其实保证的不是变量的值不变，而是保证变量指向的内存地址所保存的数据不允许改动。此时，你可能已经想到，简单类型和复合类型保存值的方式是不同的。是的，对于简单类型（数值 number、字符串 string 、布尔值 boolean）,值就保存在变量指向的那个内存地址，因此 const 声明的简单类型变量等同于常量。而复杂类型（对象 object，数组 array，函数 function），变量指向的内存地址其实是保存了一个指向实际数据的指针，所以 const 只能保证指针是固定的，至于指针指向的数据结构变不变就无法控制了，所以使用 const 声明复杂类型对象时要慎重。
*/