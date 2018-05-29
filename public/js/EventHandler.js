"use strict";
export default class EventHandler{
    constructor(){
        this.diceNum = 1;
        this.diceRoll;
        this.diceChoice;
        this.resetDice;
        this.diceTotal;

        this.increaseDice;
        this.decreaseDice;

        this.increaseNum;
        this.decreaseNum;

        this.i;
        
        this.diceTypeHandler();

        this.getElements();
    }

    getElements(){

        //increase number of dice
        document.getElementById("increaseDie").addEventListener("click", () => {
            this.diceNum++;
            console.log(this.diceNum);
            document.getElementById("diceNumber").innerHTML = this.diceNum;
        })    
        
        document.getElementById("decreaseDie").addEventListener("click", () => {
            this.diceNum--;
            console.log(this.diceNum);
            document.getElementById("diceNumber").innerHTML = this.diceNum;
            document.getElementById("diceAmount").innerHTML = "Dice: " + this.diceNum;
        })

        this.diceNum = document.getElementById("diceNumber").innerHTML = this.diceNum;
        this.diceType = document.getElementById("diceType").innerHTML = this.diceType;

        this.diceChoice = document.getElementById("rollButton").addEventListener("click", () => {
            this.diceTotal = 0;
            this.diceRoll = 0;
            for(this.i = 0; this.i < this.diceNum; this.i++){ 
                console.log("i is " + this.i);  
            this.diceRoll = Math.floor(Math.random() * this.diceType)+1;
            console.log("Roll is " + this.diceRoll)
            this.diceTotal = this.diceRoll + this.diceTotal;
            
            console.log("total is " + this.diceTotal);
        }
        this.diceTotal = document.getElementById("rollAmount").innerHTML = "Total: " + this.diceTotal;
        });

        
    }

    diceTypeHandler(){
        document.getElementById("D4").addEventListener("click", () => {
            this.diceType = 4;
            document.getElementById("diceType").innerHTML = this.diceType;
        })

        document.getElementById("D6").addEventListener("click", () => {
            console.log("EGG NOG");
            this.diceType = 6;
            document.getElementById("diceType").innerHTML = this.diceType;
        })

        document.getElementById("D8").addEventListener("click", () => {
            this.diceType = 8;
            document.getElementById("diceType").innerHTML = this.diceType;
        })

        document.getElementById("D10").addEventListener("click", () => {
            this.diceType = 10;
            document.getElementById("diceType").innerHTML = this.diceType;
        })

        document.getElementById("D12").addEventListener("click", () => {
            this.diceType = 12;
            document.getElementById("diceType").innerHTML = this.diceType;
        })
        document.getElementById("D20").addEventListener("click", () => {
            this.diceType = 20;
            document.getElementById("diceType").innerHTML = this.diceType;
        })

        document.getElementById("D100").addEventListener("click", () => {
            this.diceType = 100;
            document.getElementById("diceType").innerHTML = this.diceType;
        })
    }
}

