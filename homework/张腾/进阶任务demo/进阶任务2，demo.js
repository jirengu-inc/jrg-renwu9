console.log(1 + 1); // 2 两个数字的加法运算
console.log("2" + "4"); // '24'  两个字符串类型的数据做字符串拼接
console.log(2 + "4"); // '24'  一个数据为数字，一个数据为字符串，数字会转化为字符串再进行字符串的拼接
console.log(+"4"); // 4 一个字符串会转换为数字输出

var a = 1;
a++ + a; // 2
typeof a + 2; // 'number2'

var a = 1;
var b = 3;
console.log(a++ + b); // 4  ++运算优先级大于+，所以先进行a++，在进行+b

var arr = [3, 4, 5] 
//for(i=0;i<arr.length;i++) {console.log(arr[i]*arr[i])}

var obj = {
    name: 'hunger',
    sex: 'male',
    age: 28
}

var a = 1,
    b = 2,
    c = 3;
var val = typeof a + b || c > 0
console.log(val) // number2

var d = 5;
var data = d == 5 && console.log('bb')
console.log(data)//bb

var data2 = d = 0 || console.log('haha')
console.log(data2)//haha

var x = !!"Hello" + (!"world", !!"from here!!");
console.log(x)//2
function sayHello() {
        console.log('hello')
        console.log('jirengu')
    }
        sayHello()
        sayHello()
    var sayName = function() {
        console.log('zt')
    }
    sayName()