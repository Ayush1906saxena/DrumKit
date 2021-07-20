// Adding Event Listener to Every single button
var button;
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    button=document.querySelectorAll("button")[i];
    button.addEventListener("click",handleClick);
}

// Constructor
function drum(name,sound){
    this.name=name;
    this.sound=sound;
    this.makeSound=function(){
        new Audio(this.sound).play();
    }
}
// Making Objects
var drumw=new drum('w','sounds/crash.mp3');
var druma=new drum('a','sounds/kick-bass.mp3');
var drums=new drum('s','sounds/snare.mp3');
var drumd=new drum('d','sounds/tom-1.mp3');
var drumj=new drum('j','sounds/tom-2.mp3');
var drumk=new drum('k','sounds/tom-3.mp3');
var druml=new drum('l','sounds/tom-4.mp3');


function handleClick(){
    // Calling Function Depending upon which button was pressed
    var key=this.innerHTML;
    
    switch (key) {
        case 'w':
            drumw.makeSound();
        break;
        case 'a':
            druma.makeSound();
        break;
        case 's':
            drums.makeSound();
        break;
        case 'd':
            drumd.makeSound();
        break;
        case 'j':
            drumj.makeSound();
        break;
        case 'k':
            drumk.makeSound();
        break;
        case 'l':
            druml.makeSound();
        break;
        default:
            break;
    }
}

// Now Adding Event Listener to entire page 
// in order to detect key presses and then trigger the respective drum

document.addEventListener("keypress",handlePress);
function handlePress(){
    var keyPressed=event.key;
    switch (keyPressed) {
        case 'w':
            drumw.makeSound();
        break;
        case 'a':
            druma.makeSound();
        break;
        case 's':
            drums.makeSound();
        break;
        case 'd':
            drumd.makeSound();
        break;
        case 'j':
            drumj.makeSound();
        break;
        case 'k':
            drumk.makeSound();
        break;
        case 'l':
            druml.makeSound();
        break;
        default:
            break;
    }
}