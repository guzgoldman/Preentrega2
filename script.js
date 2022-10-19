const num1 = parseFloat(prompt("Ingrese el primer número:"))
const num2 = parseFloat(prompt("Ingrese el segundo número:"))

const op = prompt("Ingrese el operador (+, -, /, *)")

let resultado = 0

if(isNaN(num1) || isNaN(num2)) {
    alert("Ingrese correctamente dos números para realizar la operación!, reinicie el sitio.")
} else {
    if (op == "+") {
        resultado = num1+num2
    } else if (op == "-") {
        resultado = num1-num2
    } else if (op == "*") {
        resultado = num1*num2
    } else if (op == "/") {
        resultado = num1/num2
    }
    document.write(num1 + op + num2 +" = "+resultado)
}



