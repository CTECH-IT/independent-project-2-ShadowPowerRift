const button1 = document.getElementById('click1');
const button2 = document.getElementById('click2');
const button3 = document.getElementById('click3');
const button4 = document.getElementById('click4');
const txt = document.querySelector('abouttxt');

function txtChange() {
    txt.innerHTML = "duhwadhoudwouihdawwouh";
}


button1.addEventListener('click', txtChange);