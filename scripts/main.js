// Put your JavaScript here
const music = document.querySelector('#music');
const buttonmeme = document.getElementById('meme')
let meme = buttonmeme.getAttribute("class")


let audio = new Audio();
audio.src = '/sound/NGGUP.mp3';

music.addEventListener('click', function(){
    audio.play();
    audio.loop = true;
});


buttonmeme.setAttribute("type", "button")


