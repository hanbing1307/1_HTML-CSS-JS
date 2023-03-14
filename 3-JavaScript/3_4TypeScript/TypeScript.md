# 前言
    这是TypeScript的笔记

# 一、TS简介
## 1、TypeScript是什么
    1. TS是以JS为基础构建的语言，
    2. TS可以在任何支持JS的平台中执行
    3. TS是JS的超集
    4. TS扩展了JS，并添加了类型
    5. TS不能被JS解析器直接执行，需要编译为JS代码再执行

## 2、TS增加了什么？
    类型、支持ES的新特性、添加ES不具备的新特性、丰富的配置选项、强大的开发工具


# 二、TS开发环节搭建
    1. 下载node.js (长期维护版（稳定版）)
    2. 安装node.js（npm是node的包管理器）
    3. 使用npm全局安装TS
        进入命令行
        输入：npm i -g typescript
        输入：tsc  （检查是否安装完成）
    4. 创建一个ts文件
    5. 使用tsc对ts文件进行编译
        进入命令行
        进入ts文件所在目录
        执行命令：tsc xxx.ts   (将TS文件编译为符合ES规范的js文件)
    
# 三、基本类型
    类型声明
        - 类型声明是ts非常重要的一个特点
        - 通过类型声明可以指定TS中变量（参数、形参）的类型
        - 指定类型后，当为变量赋值时，ts编译器会自动检查值是否符合类型声明，符合则赋值，不符合则报错
        - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值
        - 语法：
            let 变量 = 类型;
            let 变量 = 值;
            function fn(参数: 类型, 参数: 类型): 类型{

            }
    自动类型判断
        - TS拥有自动的类型判断机制
        - 当对变量的声明和赋值是同时进行的，ts编译器会自动判断变量的类型
        - 所以如果变量的声明和赋值同时进行的，可以省略类型声明

        类型
        number      任意数字
        string      任意字符串
        boolean     布尔值true 或 false
        字面量      限制变量的值就是该字面量的值
        any         任意类型
        unknown     类型安全的any
        void        没有值（或undefined）
        never       不能是任何值
        object      任意的JS对象
        array       任意JS数组
        tuple       元素（ts新增类型，固定长度数组）
        enum        枚举，ts中新增类型


# 四、TS编译选项
    tsc xxx.ts 编译ts文件
    tsc xxx.ts -w 自动编译更改过的ts文件

    tsc 编译目录下的所有ts文件（配置tsconfig.json文件)
    include 用来指定哪些ts文件需要被编译
        路径： **表示任意目录
                *表示任意文件
        "include":[
            "文件路径"
        ]

    exclude 用来指定哪些ts文件不要编译，一般不用设置，有默认值
    files


