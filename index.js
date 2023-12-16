var audios = [
    new Audio('sounds/coin.wav'),
    new Audio('sounds/die.wav'),
    new Audio('sounds/gameover.wav'),
    new Audio('sounds/jump.wav'),
    new Audio('sounds/power.wav'),
    new Audio('sounds/stage_clear.wav'),
    new Audio('sounds/warning.wav')
];

for (var x = 0; x < audios.length; x++) {
    (function (currentX) {
        var currentButton = document.querySelectorAll("button")[currentX];
        currentButton.addEventListener("click", function () {
            audios[currentX].play();
            buttonAnimation(currentButton);
        });
    })(x);
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(document.querySelector("." + event.key));
});

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/coin.wav").play();
            break;
        case "a":
            new Audio("sounds/die.wav").play();
            break;
        case "s":
            new Audio("sounds/gameover.wav").play();
            break;
        case "d":
            new Audio("sounds/jump.wav").play();
            break;
        case "j":
            new Audio("sounds/power.wav").play();
            break;
        case "k":
            new Audio("sounds/stage_clear.wav").play();
            break;
        case "l":
            new Audio("sounds/warning.wav").play();
            break;
    }
}

function buttonAnimation(button) {
    button.classList.add('pressed');
    
    // Remove the 'pressed' class after a short delay (adjust the timeout as needed)
    setTimeout(function () {
        button.classList.remove('pressed');
    }, 100);
}
