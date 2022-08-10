//<<<<==========================start==============================>>>>>>>>>>>>>>>>>

// document.width = window.innerWidth ;
console.log(window.innerWidth);


const canvas = document.querySelector(`#canvas`);
canvas.width = window.innerWidth - 60;
canvas.height = canvas.width / 2.7 //600;

let context = canvas.getContext("2d");
let startBgColor = "white"
context.fillStyle = startBgColor;
context.fillRect(0, 0, canvas.width, canvas.height);


let drawColor = "black";
let drawWidth = "2";
let isDrawing = false;

let restoreArray = [];
let index = -1;


function changeClr(element) {
    drawColor = element.value

    let button1 = document.querySelector(`#b1`);
    button1.style.color = drawColor
    button1.style.borderColor = `  ${drawColor}`
    button1.style.boxShadow = ` 0px 0px 5px 5px ${drawColor} `

    let button2 = document.querySelector(`#b2`);
    button2.style.color = drawColor
    button2.style.borderColor = drawColor
    button2.style.boxShadow = ` 0px 0px 5px 5px ${drawColor} `

    let button3 = document.querySelector(`#b3`);
    button3.style.color = drawColor
    button3.style.borderColor = drawColor
    button3.style.boxShadow = ` 0px 0px 5px 5px ${drawColor} `

}

function changeWidth(element) {
    drawWidth = element.value
}

function backToClr(element) {
    element.style.backgroundColor = "black"
    element.style.boxShadow = ` 0px 0px 5px 5px ${drawColor} `

}

function hover(element) {
    //     // button.onmouseover
    element.style.backgroundColor = drawColor //"red"
    element.style.color = "white"
    element.style.boxShadow = ` 0px 0px 5px 5px white` //${drawColor} 

}




canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop);
    event.preventDefault();
    console.log("Start");
    // console.log("start event :" , event );
}

function draw(event) {
    if (isDrawing) {
        context.lineTo(event.clientX - canvas.offsetLeft,
            event.clientY - canvas.offsetTop);
        context.strokeStyle = drawColor;
        context.lineWidth = drawWidth;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
        console.log("drawing");
    }
    event.preventDefault();
    // console.log("draw event :" , event );
    // console.log("canvas.offsetTop forYevent :" , canvas.offsetTop );
    // console.log("canvas.offsetLeft forevent :" , canvas.offsetLeft );
}



function stop(event) {

    if (isDrawing) {
        context.stroke();
        context.closePath();
        isDrawing = false;
    }
    event.preventDefault();

    if (event.type != `mouseout`) {

        restoreArray.push(context.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
        console.log(restoreArray);
    }
    // console.log("stop event :" , event );
}

function clearCanvas() {
    context.fillStyle = startBgColor;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
    console.log("clear");
    // console.log(event);
    restoreArray = [];
    index = -1;
}
// clear() ;


function undo() {

    if (index <= 0) {
        clearCanvas();
    } else {
        index -= 1;
        restoreArray.pop();
        context.putImageData(restoreArray[index], 0, 0)
    }
}

function download() {
    const data = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = data;
    link.download = "cavas-drawing.jpg";
    link.click();
}

















/*

function bgChange() {
    const canvas = document.querySelector(`#canvas`);
    let context = canvas.getContext("2d");
    document.querySelector(`body`).style.backgroundColor = "darkgray"
    context.fillStyle = "white" //startBgColor;
    startBgColor = "white"
    document.querySelector(`#head`).style.display = "contents"

}





*/