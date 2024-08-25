// var option = prompt(`
//     Press 1 for addition
//     Press 2 for subtraction
//     Press 3 for division
//     Press 4 for multiplication
// `);

// var num1 = Number(prompt("Enter the first number"));
// var num2 = Number(prompt("Enter the second number"));

// if(option == 1){
//     alert("Addition of entered two numbers: " + (num1 + num2));
//     document.write("Addition of entered two numbers: " + (num1 + num2));
// }
// else if(option == 2){
//     alert("Subtraction of entered two numbers: " + (num1 - num2));
//     document.write("Subtraction of entered two numbers: " + (num1 - num2));
// }
// else if(option == 3){
//     if (num2 !== 0) {
//         alert("Division of entered two numbers: " + (num1 / num2));
//         document.write("Division of entered two numbers: " + (num1 / num2));
//     } else {
//         alert("Division by zero is not allowed.");
//         document.write("Division by zero is not allowed.");
//     }
// }
// else if(option == 4){
//     alert("Multiplication of entered two numbers: " + (num1 * num2));
//     document.write("Multiplication of entered two numbers: " + (num1 * num2));
// }
// else{
//     alert("Invalid option selected.");
//     document.write("Invalid option selected.");
// }
document.getElementById('addButton').addEventListener('click', function() {
    calculate('add');
});

document.getElementById('subButton').addEventListener('click', function() {
    calculate('subtract');
});

document.getElementById('divButton').addEventListener('click', function() {
    calculate('divide');
});

document.getElementById('mulButton').addEventListener('click', function() {
    calculate('multiply');
});


document.getElementById('clearButton').addEventListener('click', function() {
    clearCalculator();
});

function calculate(operation) {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var result;

    switch(operation) {
        case 'add':
            result = "The sum is: " + (num1 + num2);
            break;
        case 'subtract':
            result = "The difference is: " + (num1 - num2);
            break;
        case 'divide':
            if (num2 !== 0) {
                result = "The quotient is: " + (num1 / num2);
            } else {
                result = "Division by zero is not allowed.";
            }
            break;
        case 'multiply':
            result = "The product is: " + (num1 * num2);
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById('result').textContent = result;
}


function clearCalculator() {
    document.getElementById('num1').value = ''; // Clear the first number input
    document.getElementById('num2').value = ''; // Clear the second number input
    document.getElementById('result').textContent = ''; // Clear the result display
}

