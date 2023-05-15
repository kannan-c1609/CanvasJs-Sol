const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const circleX = 100;
const circleY = 100;
const circleRadius = 30;

function drawCircle(circleX,color) {
    ctx.beginPath();
    ctx.arc(circleX,circleY,circleRadius,0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

const arrow1X = canvas.width - 200;
let arrowX = arrow1X;
const arrowY = 100;
const speed = 5;
let isMoving = false;

function drawArrow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle(100,'red');

    ctx.beginPath();
    ctx.moveTo(arrowX,arrowY);
    ctx.lineTo(arrowX + 50, arrowY - 20);
    ctx.lineTo(arrowX + 50, arrowY + 20);
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(arrowX+50, arrowY);
    ctx.lineTo(arrowX+100, arrowY);
    ctx.lineWidth = 20;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    if(isMoving) {
        if(arrowX > circleX + circleRadius) {
            arrowX -= speed;
        }
        else {
            isMoving = false;
        }
    }

    requestAnimationFrame(drawArrow);
}

canvas.addEventListener('click',function(event) {
    const clickX = event.clientX - canvas.offsetLeft;

    if(clickX >= circleX - circleRadius && clickX <= circleX + circleRadius && !isMoving) {
        isMoving = true;
    } 
});

function resetArrow() {
    isMoving = false;
    arrowX = arrow1X
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', resetArrow);

drawArrow();
