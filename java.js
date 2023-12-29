var i=0;
var txt='Hi! My name is Maria Sekyi';
var speed = 60;

function typing(){
   if (i < txt.length){
        document.getElementById("hi").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}
typing();

var j=0;
var txt1="I am a Human-Centered UX Researcher and Designer. This is my portfolio :)";
function typing1(){
    if (j<txt1.length){
        document.getElementById('me').innerHTML += txt1.charAt(j);
        j++;
        setTimeout(typing1, speed);
    }
}
typing1();
