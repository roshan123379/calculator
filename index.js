const result = document.getElementById('result');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const back = document.getElementById('back')

let currentNumber = '';
let previousNumber = '';
let operation = null;
let sign;


function updateDisplay() {
  result.value = currentNumber;
}


function calculate() {
  let calculation;
  const current = parseFloat(currentNumber);
  const previous = parseFloat(previousNumber);
  if (isNaN(current) || isNaN(previous)) return;
  switch (operation) {
    case '+':
      calculation = previous + current;
      break;
    case '-':
      calculation = previous - current;
      break;
    case '*':
      calculation = previous * current
      break;
      case '/':
        calculation = previous / current;
        break;
      default:
        return;
    }
    currentNumber = calculation.toString();
    operation = null;
    previousNumber = '';
    }
    
    
    clear.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
    
    });
    
    
    equals.addEventListener('click', () => {
    calculate();
    updateDisplay();
    });
    
    
    numbers.forEach((number) => {
    number.addEventListener('click', () => {
    currentNumber += number.value;
    updateDisplay();
    });
    });

    back.addEventListener('click',()=>{
        result.value = result.value.slice(0,-1)
        currentNumber='';
    })
    
    operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        sign = operator.value
        result.value = sign
    if (operation !== null) {
    calculate();
    updateDisplay();
    }
    operation = operator.value;
    previousNumber = currentNumber;
    currentNumber = '';
    });
    });
    
    
    
    
    
          