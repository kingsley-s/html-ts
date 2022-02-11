function greeter(person: string) {
    return 'Hello, ' + person;
}
let user = 'SUN ZHUO';
const tsDiv:HTMLElement = document.getElementById('tsDiv')!; //感叹号(非空断言操作符) ，如果变量可能为空，可以用这个，如果为空，会丢出断言失败。
tsDiv.innerHTML = greeter(user);
//枚举示例
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);
console.log(Color);
