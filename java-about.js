var coll = document.getElementsByClassName("collapsible");
var k;

for (k = 0; k < coll.length; k++) {
  coll[k].addEventListener("click", function expand() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
expand();