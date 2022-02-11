"use strict";
function greeter(person) {
    return 'Hello, ' + person;
}
let user = 'SUN ZHUO';
const tsDiv = document.getElementById('tsDiv'); //感叹号(非空断言操作符) ，如果变量可能为空，可以用这个，如果为空，会丢出断言失败。
tsDiv.innerHTML = greeter(user);
//枚举示例
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
console.log(Color);
