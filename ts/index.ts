function greeter(person: string) {
    return 'Hello, ' + person;
}
let isDone: boolean = false;
let user = 'SUN ZHUO';
const tsDiv:HTMLElement = document.getElementById('tsDiv')!; //感叹号(非空断言操作符) ，如果变量可能为空，可以用这个，如果为空，会丢出断言失败。
tsDiv.innerHTML = greeter(user);
//枚举示例
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
console.log(c);
console.log(Color);

let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
console.log(notSure.toFixed());
// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

