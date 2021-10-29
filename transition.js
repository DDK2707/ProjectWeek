function openNav() {
    document.getElementById("mysidebar").style.width = "250px"
    document.getElementById("main").style.marginLeft = "250px"
    document.getElementById("openbtn").style.display = "none"
}

function closeNav() {
    document.getElementById("mysidebar").style.width = "0"
    document.getElementById("main").style.width = "0"
    document.getElementById("openbtn").style.display = "block"
    document.getElementById("openbtn").style.marginLeft = "-243px"
}

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
   document.documentElement.scrollTop = 0;
  }