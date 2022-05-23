
// Thinks makes all the buttons and txt a variable 

const button1 = document.getElementById('click1');
const button2 = document.getElementById('click2');
const button3 = document.getElementById('click3');
const button4 = document.getElementById('click4');
const txt = document.getElementById('about_txt');


// This basically tells you when you click this button display this text 
function txtChange() {
    txt.innerHTML = "The mission of Pandas International, a nonprofit organization, is to ensure the preservation and propagation of the endangered Giant Panda. Pandas International provides public awareness and education, support for research, habitat preservation and enhancement, and assistance to Giant Panda Centers";
}


button1.addEventListener('click', txtChange);

function txtChange2() {
    txt.innerHTML = "E-mail us at: info@pandasinternational.org" + "\n\t" + "P.O. Box 620335" + "\n\t" + "Littleton, Colorado 80162" + "\n\t" + "Phone: 303.933.2365";
}


button2.addEventListener('click', txtChange2);

function txtChange3() {
    txt.innerHTML = "Pandas International strives to achieve its mission statement on a continuous basis. Annually the Board Members review the accomplishments of the past year, assess the results of those accomplishments, and determine their level of effectiveness in accomplishing our mission. The Board also sets defined, measurable goals and objectives for the next calendar year in conjunction with the approval of the annual budget. The annual evaluation shall also identify and address deficiencies, successes, and impacts in all aspects of the foundation’s program, including but not limited to finances, marketing, and the species’ and their caretakers’ needs. Since part of our program is implemented at the China Conservation and Research Center for the Giant Panda in Sichuan Province, China, one of the foundation’s goals is to do on- site inspections yearly. All Board members are volunteers who donate their time, expertise, and travel while serving Pandas International and when visiting panda reserve locations. Board members incur no expense to Pandas International on their annual site inspection visits.";
}


button3.addEventListener('click', txtChange3);

function txtChange4() {
    txt.innerHTML = "Suzanne Braden, Director," + "\n\t" + "Littleton, Colorado" + "\n\t" + "Brad Brieman, Information Technology Consultant" + "\n\t" + "Parker, ColoradoJulie A. Rosner-Lengele, Board Member" + "\n\t" + "Collegeville, Pennsylvania" + "\n\t" + "JJ Loughran, Treasurer" + "\n\t" + "Denver, Colorado" + "\n\t" + "Sondra McCoy, Secretary" + "\n\t" + "Westminster, Colorado" + "\n\t" + "Kim Fong Sheremeta, Event Committee" + "\n\t" + "Denver, Colorado" + "\n\t" + "Karen Wille, Board Chair" + "\n\t" + "Arlington, Virginia" + "\n\t" + "Weiyi Zhang, China Relations Advisor" + "\n\t" + "Beijing, China" + "\n\t" + "Advisory Board" + "\n\t" + "Dr. Carlos Sanchez, Veterinarian" + "\n\t" + "Portland, Oregon" + "\n\t" + "Annette Yuen, Consultant to CCRCGP" + "\n\t" + "Hong Kong, China" + "\n\t" + "Honorary Board Members" + "\n\t" + "Dr. Li Desheng, Senior Veterinarian" + "\n\t" + "Wolong Nature Reserve, Sichuan, Chin" + "\n\t" + "Diane Rees, Co-Founder" + "\n\t" + "Boulder, Colorado" + "\n\t" + "Dr. Tang Chungxiang, Senior Veterinarian" + "\n\t" + "Wolong Nature Reserve, Sichuan, China" + "\n\t" + "Key Staff, Andrea Sheremeta" + "\n\t" + "Littleton, Colorado";
}


button4.addEventListener('click', txtChange4);