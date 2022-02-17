"use strict";
function greeter(person) {
    return 'Hello, ' + person;
}
let isDone = false;
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
let colorName = Color[2];
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
console.log(c);
console.log(Color);
let notSure = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
console.log(notSure.toFixed());
create({ prop: 0 }); // OK
create(null); // OK
