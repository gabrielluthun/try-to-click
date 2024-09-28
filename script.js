// Get the button
const button = document.querySelector('button');

function moveButton() {
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// When mouse moves, the function is called
document.addEventListener('mousemove', (event) => {
    // Get the mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    // getBoundingClientRect() returns the size of an element and its position relative
    const buttonRect = button.getBoundingClientRect();

    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    // Calculate the distance between the mouse and the button
    const distance = Math.sqrt(Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2));

    if (distance < 100) {
        moveButton();
    }
});

// if you can click on the button, you win
button.addEventListener('click', () => {
    alert('Congrats !');
});