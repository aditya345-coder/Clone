import { GAME_HEIGHT } from "./config.js";

export default class Player{
    constructor(){
        this.x = 10;
        this.h = 94;
        this.w = 88;
        this.y = GAME_HEIGHT - (this.h + 20);
        this.image = new Image();
        //this.image.src = '../assets/still.png';
        this.runImages  = ['../assets/run1.png', '../assets/run2.png'];
        this.index = 0;
        this.image.src = this.runImages[this.index];

    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
        this.walkAnimation();
    }
    walkAnimation(){
        if(this.index >=2){
            this.index = 0;
        }
        this.image.src  = this.runImages [this.index];
        this.index++;
    }
}