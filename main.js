// Task 1
function task1(){
    console.log("Hello, World!");
    console.log("Hello, World!");
    console.log("Hello, World!");
}

// Task 2
function task9(number){
    if (number < 0) {
        console.log(number + " is negative");
    } else if (number > 0) {
        console.log(number + " is positive");
    } else {
        console.log("Given number is 0");
    }
}
// Task 3
function task14(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log("The greatest number is: " + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log("The greatest number is: " + num2);
    } else {
        console.log("The greatest number is: " + num3);
    }
}

task1()

task9(-2)
task9(0)
task9(3)

task14(5, 3, 7)
task14(1, 3, -5)
task14(5, 5, 5)
task14(3, 3, 4)