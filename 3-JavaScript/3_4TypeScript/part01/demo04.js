//  object 表示一个js对象
var a;
a = { name: '孙悟空' };
a = function () {
};
// {}用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值, 属性名:属性值}
// 在属性名后边加上?,表示属性值是可选的
var b;
b = { name: "孙悟空", age: 18 };
var c;
c = { name: "猪八戒", age: 18, gender: "男" };
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
var h;
h = ["hello", "123"];
/*
    enum 枚举
*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: 0
};
// console.log((i.gender === Gender.Male));
// &表示且，|表示或
var j = { name: string } & { age: number };
j = { name: "孙悟空", age: 18 };
