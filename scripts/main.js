// Put your JavaScript here
const music = document.querySelector('#music');


let audio = new Audio();
audio.src = '/sound/NGGUP.mp3';

music.addEventListener('click', function(){
    audio.play();
    audio.loop = true;
});


const buttonmeme = document.getElementById('meme')
let meme = buttonmeme.getAttribute("class")

buttonmeme.setAttribute("type", "button")


