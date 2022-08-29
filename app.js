const targetElement = document.getElementById('target');
let pointElement = document.getElementById('points');
let timeElement = document.getElementById('time');
let levelElement = document.getElementById('level');
let levels = {
    1: {
        points: 15,
        time: 10
    },
    2: {
        points: 20,
        time: 10
    },
    3: {
        points: 30,
        time: 13
    }
}

let countPoint = 0;
let countTime = levels[1].time;;
let countLevel = 1;


let timeInterval = setInterval(() => {
    winner();
    printTime();
    printPoint();
    countTime--;
}, 1000);

targetElement.addEventListener('mouseover', function() {
    this.style.top = randomPosition() + "px";
    this.style.left = randomPosition() + "px";

    countPoint++;
    printPoint();
});

const randomPosition = () => {
    return Math.round(Math.random() * 400);
}

const printPoint = () => {
    pointElement.innerText = countPoint + "/" + levels[1].points;
}

const printTime = () => {
    timeElement.innerText = countTime;
}

const printLevel = () => {
    levelElement.innerText = countLevel;
}

const winner = () => {
    if (countTime >= 1 && countPoint >= levels[1].points) {
        alert("Gano el juego");
        clearInterval(timeInterval);
    } else if (countTime <= 0 && countPoint <= levels[1].points) {
        alert("Perdio el juego");
        clearInterval(timeInterval);
    }
}