let age;      //  赋值
age=35;       // 声明(定义)变量
let str='sb'; //  可以声明变量的时候同时给变量初始化
console.log(str); // 使用变量,变量通过变量名来获得里面的数据
str='stupid';   // 更新变量，let不允许多次声明1个变量
let array=[1,'abc',false],
    name='pig',
    float=1.66666;          // 声明多个变量
// 声明一个变量，用于存放用户购买的商品 数量 为 20 件
// 2. 声明一个变量，用于存放用户的 姓名 为 ’张三’
// 3. 依次控制台打印输出两个变量
name=prompt('请输入姓名');
document.write('我叫'+name);
// 有2个变量： num1 里面放的是 10， num2 里面放的是20
// 最后变为 num1 里面放的是 20 ， num2 里面放的是 10 
// 冒泡排序 使用临时变量做中间存储
let num1=10,
    num2=20,
    num3=num1;
num1=num2;
num2=num3;
document.write(num1,num2);

