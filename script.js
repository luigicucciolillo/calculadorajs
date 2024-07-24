// FIREWORKS **********************************************
function activateFirework(fireworkId, left = '50%', top = '50%', scale = 1, color = '#f5cf52') {
    const firework = document.getElementById(fireworkId);
    if (firework) {
        // Set CSS custom properties for position, scale, and color
        firework.style.setProperty('--left', left);
        firework.style.setProperty('--top', top);
        firework.style.setProperty('--scale', scale);
        firework.style.setProperty('--color', color);

        // Activate the firework
        firework.classList.add('active');

        // Optional: Remove fireworks after animation completes
        setTimeout(() => {
            firework.classList.remove('active');
        }, 2000); // Adjust to match animation duration
    }
}
function fireworkRUN()
{
    activateFirework('firework1', '10%', '20%', 2, '#f5cf52');
    activateFirework('firework2', '30%', '40%', 1.5, '#ff5733');
    activateFirework('firework3', '70%', '60%', 1, '#33c3ff');
}
// SLIDING RESULT *******************************************//
const resultDiv = document.getElementById('result');
const resultValueSpan = document.getElementById('resultValue');
// Function to handle the result display and sliding effect
function showResult(value) {
    resultValueSpan.textContent = value;
    resultDiv.classList.add('show');
    // Hide result after a while (optional)
    setTimeout(() => {
        resultDiv.classList.remove('show');
    }, 2000); // Adjust the duration as needed
}

// EXPLOSION *******************************************
// Select all buttons with the class 'btn'
const buttons = document.querySelectorAll('.btn');
// Function to handle the explosion effect
function addExplosionEffect(event) {
    const button = event.currentTarget; // Get the button that was clicked
    button.classList.add('explode');

    // Remove the 'explode' class after the animation ends
    setTimeout(() => {
        button.classList.remove('explode');
    }, 400); // Match this time with the duration of the animation
}
// Attach the click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', addExplosionEffect);
});
// NORMAL WORKING *****************************************
document.addEventListener('DOMContentLoaded', function() {    
    const screen = document.querySelector('.calculator-screen');
    const buttons = document.querySelectorAll('.btn');
    let screenValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
switch (value) {
  case 'C':
        screenValue = '';
        activateMatrixEffectParam(50,'red','C')  
    break;
  case '=':
        try { 
            fireworkRUN()
            screenValue = eval(screenValue);
            showResult(screenValue);
            activateMatrixEffectParam(5000,'red',screenValue.toString())  
            fireworkRUN()
  
        } 
        catch {screenValue = 'Error';  }
    break;
  case 'cos':
        screenValue = Math.cos(screenValue * (Math.PI / 180));
        activateMatrixEffectParam(500,'red',screenValue.toString())    
        showResult(screenValue);

    break;
  case 'sin':
        screenValue = Math.sin(screenValue * (Math.PI / 180));
        activateMatrixEffectParam(500,'red',screenValue.toString())    
        showResult(screenValue);
    break;
  case 'tan':
        screenValue = Math.tan(screenValue * (Math.PI / 180));
        activateMatrixEffectParam(500,'red',screenValue.toString())    
        showResult(screenValue);
    break;
  case 'log':
        screenValue = Math.log10(screenValue);
        activateMatrixEffectParam(500,'red',screenValue.toString())    
        showResult(screenValue);
  break;
  default:
    if (value === '=' || value === '+' || value === '-' || value === '*' || value === '/') {
        activateMatrixEffectParam(1000,'green',value);
    } else {activateMatrixEffectParam(1000,'blu',screenValue.toString()+value);}

    screenValue += value;
}
fireworkRUN()

            screen.value = screenValue;
        });
    });
});

fireworkRUN()

// MATRIX EFFECT ****************************************** 
function activateMatrixEffectParam(numbers,color,intext) {
    const matrixEffect = document.getElementById('matrixEffect');
    matrixEffect.classList.add('active');
    generateMatrixEffectParam(numbers,color,intext)
}
function deactivateMatrixEffect() {
    const matrixEffect = document.getElementById('matrixEffect');
    matrixEffect.classList.remove('active');
}
function generateMatrixEffectParam(numbers,color,intext) {
    const matrixEffect = document.getElementById('matrixEffect');
    matrixEffect.innerHTML = ''; // Clear existing content
    matrixEffect.dataset.color = color;
    for (let i = 0; i < numbers; i++) {
        const span = document.createElement('span');
        span.innerText = intext//Math.random().toString(36).substr(2, 1);
        span.style.left = Math.random() * 100 + 'vw';
        span.style.animationDuration = Math.random() * 2 + 3 + 's';
        span.style.animationDelay = Math.random() * 1 + 's';
        matrixEffect.appendChild(span);
    }
}