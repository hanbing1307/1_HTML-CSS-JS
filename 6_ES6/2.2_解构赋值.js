/* 
概述
    解构赋值是对赋值运算符的扩展。
    他是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。
    在代码书写上简洁且易读，语义更加清晰明了；也方便了复杂对象中数据字段获取。

    解构模型
    在解构中，有下面两部分参与：

    解构的源，解构赋值表达式的右边部分。
    解构的目标，解构赋值表达式的左边部分。
*/
// 数组模型的解构（Array）
// 基本
let [a, b, c] = [1, 2, 3]
console.log(a, b, c);  // 1, 2, 3

// 可嵌套
let [e, [f], g] = [1, [2], 3]
console.log(e,f,g);  // 1, 2 , 3

// 可忽略
let [h, , i] = [1, ,3]
console.log(h, i);  // 1, 3

// 不完全解构
let [j = 1, k] = [];
console.log(j, k);  // 1, undefined

// 剩余运算符
let [l, ... m] = [1, 2, 3];
console.log(l, m);  // 1, [2, 3]

/* 
字符串等
在数组的解构中，解构的目标若为可遍历对象，皆可进行解构赋值。可遍历对象即实现 Iterator 接口的数据。
*/
let [n, o, p ,q] = 'jack';
console.log('n=',n, 'o=',o, 'p=',p ,'q=',q); //n= j o= a p= c q= k

// 解构默认值
let [r = 2] = [undefined]; 
console.log('r=',r);   // r= 2
// 当解构模式有匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果。
let [s = 3, t = s] = [];  

console.log('s=',s, 't=',t);   // s= 3 t= 3
// s 与 t 匹配结果为 undefined ，触发默认值：a = 3; b = a =3

let [s1 = 3, t1 = s1] = [1];    
console.log('s1=',s1, 't1=',t1); // s1= 1 t1= 1
// s1正常结构赋值，匹配结果为：s1=1,t1匹配结果为undefined，触发默认值t1 = s1 = 1

let [s2 = 3, t2 = s2] = [1, 2]; 
console.log('s2=',s2, 't2=',t2); // s2= 1 t2= 2
// s2和t2都正常解构赋值，匹配结果为 s2= 1 t2= 2
