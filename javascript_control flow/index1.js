
function myfirst(callback) {
    myDisplayer("Hello");
    callback();
}

function mySecond() {
    myDisplayer("Goodbye");
}

function myDisplayer(massage) {
    console.log(massage);
}

myfirst(mySecond);


console.log("I print first!");
setTimeout(() => {
    console.log("I print after 3 seconds");
}, 3000);
console.log("I print second!");


function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}

setInterval(setTime, 2000);
console.log("Program Finish");



