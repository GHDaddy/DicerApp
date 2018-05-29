"use strict";
import EventHandler from "./EventHandler.js";

class Main{
    constructor(){
        this.eventHandler = new EventHandler();
        this.prepUX();
    }
    prepUX() {
    }
    
}

window.addEventListener('load', () => {
    new Main();
});
