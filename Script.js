var bg_radio = document.bg_select.bg;
document.body.className = "bg1";
for(var i=0;i<bg_radio.length;i++){
    bg_radio[i].onclick = function() {
        document.body.className = bg_radio.value;
    }
    
}

var change = document.getElementById("change");
var input = document.getElementById("userinput");

function setPlaceHolder(){
    document.getElementById("userinput").placeholder= document.title;
}

function changeTitle(){
    if(input.value.length > 0)
    document.title = input.value;
    input.value = "";
    setPlaceHolder();
}

change.addEventListener("click", changeTitle);

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("bar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}