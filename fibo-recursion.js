console.log(0);
console.log(1);
let count = 2;

function fibonacci(num1, num2){
    if(count<=20){
        newFibo = num1+num2;
        console.log(newFibo);
        num2 =  num1;
        num1 = newFibo;
        count++;
        fibonacci(num1, num2);
    }
}
fibonacci(1, 0);