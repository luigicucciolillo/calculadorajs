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
            // matrix effect ****************** 
    break;
  case '=':
        try {     
            generateMatrixEffectLARGE();
            screenValue = eval(screenValue);
        } 
        catch {screenValue = 'Error';  }
    break;
  case 'cos':
        screenValue = Math.cos(screenValue * (Math.PI / 180));
    break;
  case 'sin':
        screenValue = Math.sin(screenValue * (Math.PI / 180));
    break;
  case 'tan':
        screenValue = Math.tan(screenValue * (Math.PI / 180));
    break;
  case 'log':
        screenValue = Math.log10(screenValue);
  break;
  default:
    screenValue += value;
    activateMatrixEffect();
}
            screen.value = screenValue;
        });
    });
});


// matrix effect ****************** 
function activateMatrixEffect() {
    const matrixEffect = document.getElementById('matrixEffect');
    matrixEffect.classList.add('active');
    generateMatrixEffect();
}

function activateMatrixEffectLARGE() {
    const matrixEffect = document.getElementById('matrixEffect');
    matrixEffect.classList.add('active');
    matrixEffect.dataset.color = 'red'; // Set data attribute for color
    generateMatrixEffectLARGE();
}

function deactivateMatrixEffect() {
    const matrixEffect = document.getElementById('matrixEffect');
    matrixEffect.classList.remove('active');
}

function generateMatrixEffect() {
    const matrixEffect = document.getElementById('matrixEffect');
    matrixEffect.innerHTML = ''; // Clear existing content

    for (let i = 0; i < 5; i++) {
        const span = document.createElement('span');
        span.innerText = Math.random().toString(36).substr(2, 1);
        span.style.left = Math.random() * 100 + 'vw';
        span.style.animationDuration = Math.random() * 2 + 3 + 's';
        span.style.animationDelay = Math.random() * 5 + 's';
        matrixEffect.appendChild(span);
    }
}

function generateMatrixEffectLARGE() {
    const matrixEffect = document.getElementById('matrixEffect');
    matrixEffect.innerHTML = ''; // Clear existing content

    for (let i = 0; i < 100; i++) {
        const span = document.createElement('span');
        span.innerText = Math.random().toString(36).substr(2, 1);
        span.style.left = Math.random() * 100 + 'vw';
        span.style.animationDuration = Math.random() * 2 + 3 + 's';
        span.style.animationDelay = Math.random() * 0.5 + 's';
        matrixEffect.appendChild(span);
    }
}