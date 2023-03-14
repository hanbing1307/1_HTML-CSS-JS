// 声明一个变量a，同时指定类型为number
var a;
//  a的类型设置为number，后面使用就只能是数字
a = 10;
// a = 'hello' // 报错，因为变量a的类型是number，不能赋值字符串
// 声明变量同时直接进行赋值
var b = true;
b = true;
// b = 123 // 报错，因为b已经指定为布尔值
var c = false;
// c = 123 // 报错，上面c赋值时，ts自动判断类型为布尔值
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));
