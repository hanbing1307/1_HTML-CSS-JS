//  object 表示一个js对象
let a: object;
a ={name:'孙悟空'};
a = function(){

};


// {}用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值, 属性名:属性值}
// 在属性名后边加上?,表示属性值是可选的
let b:{name:string, age?: number};
b = {name:"孙悟空", age:18}

let c:{name:string, [proName:string]:any}
c = {name:"猪八戒", age: 18, gender:"男"}

/* 
    数组的类型声明
        类型[]
        Array[]
*/

/* 
    tuple 元组，就是固定长度的数组
        语法
            [类型，类型，类型...]
*/
let h: [string, string]
h = ["hello", "123"]


/* 
    enum 枚举
*/
enum Gender{
    Male = 0,
    female = 1
}
let i:{name:string, gender: Gender}
i = {
    name:'孙悟空',
    gender: 0
}
// console.log((i.gender === Gender.Male));

// &表示且，|表示或
let j = {name:string} & {age:number}
j = {name:"孙悟空", age:18}
