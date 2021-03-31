function myFunction() {
  var x = document.getElementById("mylinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openNav() {
document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidepanel").style.width = "0";
}
