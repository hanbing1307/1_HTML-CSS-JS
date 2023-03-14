// 直接使用字面量进行类型声明
let a:number;
a = 1

let b:string;
// b  = 123 // 报错，不能将数字类型赋值给字符串


//  可以使用 | 来连接多个类型（联合类型）
let c: "male" | "female";
c = "male";
c = "female"

let d:boolean;
d = true;
d = false;
// d = 123 //报错

let d: boolean | string;
// d = true;
d = 'hello';

//  any 表示任意类型，一个变量设置类型为any后相当于对该变量关闭了ts的类型检测
//  开发中不建议使用any类型  可以赋值给其它变量
// let e: any;

// 隐式声明any，
let e
e = 10
e = true;
e = 'hello';
e = false

// unknown 实际上就是一个类型安全的any，不能直接赋值给其它变量
let f: unknown;
f = 10;
f = true;
f = 'hello';


// d类型是any，它可以赋值给任意变量
let g: string;
g = e   // e赋值给g，改变了g的类型
// g = f  // 这里f类型是unknown，不能赋值给其它变量

if(typeof f === "string"){
    g = f
}

// 类型断言，可以用来告诉解析器变量的实际类型
/* 
    语法：
        变量 as 类型
        <类型>变量
*/
g = f as string

// void表示空，用函数为例，就表示没有返回值的函数
function fn():void {

}
// never表示永远不会返回结果
function fn2():never{
    throw new Error('报错了')
}

