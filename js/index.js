const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active');
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-total").style.top = "0px";
  } else {
    document.getElementById("nav-total").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}