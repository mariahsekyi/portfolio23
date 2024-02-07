var back = document.getElementById("back");
var next = document.getElementById("next");

var current = document.getElementById("persona1");
back.addEventListener("click", function goBack(){
    
    var link = current.getAttribute("src");
    if (link === "imgs/Persona1.png"){
        current.setAttribute("src" , "imgs/Persona2.png")
    }
    if (link === "imgs/Persona2.png"){
        current.setAttribute("src", "imgs/Persona3.png")
    }
    if (link === "imgs/Persona3.png"){
        current.setAttribute("src", "imgs/Persona1.png")
    }
});

next.addEventListener("click", function next(){
    var link = current.getAttribute("src");
    if (link === "imgs/Persona1.png"){
        current.setAttribute("src" , "imgs/Persona2.png")
    }
    if (link === "imgs/Persona2.png"){
        current.setAttribute("src", "imgs/Persona3.png")
    }
    if (link === "imgs/Persona3.png"){
        current.setAttribute("src", "imgs/Persona1.png")
    }
});
