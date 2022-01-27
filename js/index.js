"use strict";
function greeter(person) {
    return 'Hello, ' + person;
}
let user = 'SUN ZHUO';
const tsDiv = document.getElementById('tsDiv'); //感叹号(非空断言操作符) ，如果变量可能为空，可以用这个，如果为空，会丢出断言失败。
tsDiv.innerHTML = greeter(user);
