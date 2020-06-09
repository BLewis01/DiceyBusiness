// var button = document.getElementById("mybtn2");
// var num1 = document.getElementById("num1")

var min = 1;
var max = 7;

// function generateNumber() {
    //     var num =Math.floor((Math.random() *(max-min) + min));
    //     return num;
// }
// //*
// button.addEventListener("click", function(){
//     var result = generateNumber();
//     num1.innerHTML = result
// })
// var button = document.getElementById("mybtn2");
// var num2 = document.getElementById("num2");


// var min = 1;
// var max = 7;

// function generateNumber() {
//     var num2 =Math.floor((Math.random() *(max-min) + min));
//     return num2;
// }

// button.addEventListener("click", function(){
    //     var result = generateNumber();
//     num2.innerHTML = result;
// })
// var button = document.getElementById("mybtn2");
// var num3 = document.getElementById("num3");


// var min = 1;
// var max = 7;

// function generateNumber() {
    //     var num3 =Math.floor((Math.random() *(max-min) + min));
//     return num3;
// }

// button.addEventListener("click", function(){
//     var result = generateNumber();
//     num3.innerHTML = result;
// });


//* Next step/////////////////////////////////
let generate = document.querySelector("#mybtn1");
let rollbtn = document.getElementById("mybtn2")
let board = document.querySelector(".board");
// var val = Math.floor((Math.random() *(max-min) + min));
var counter = 0;
let diceArray = []

function makeDie() {
    new Die()
}

class Die{
    constructor(value){
        this.value = value
        this.die = document.createElement("div");
        this.die.className = "die"
        this.roll()
        this.die.innerText = this.value
        this.id = "dice" + counter
        counter++;
        board.appendChild (this.die)
        diceArray.push(this)
    }

    
    roll(){
        // let randomNum = Math.floor((Math.random() *(max-min) + min));
        let randomNum = Math.floor(Math.random() * 6 + 1)
        this.value = randomNum
        this.die.innerText = this.value
    }
}

generate.addEventListener("click", function(){
   makeDie()
})

rollbtn.addEventListener("click", function(){
    diceArray.forEach(a => a.roll())
})


