// Javascript 

// NavBar
navBars = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 





  // typeWriting effect 
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" A Software Engineer", "A React Developer", ];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
if (charIndex < textArray[textArrayIndex].length) { if(!cursorSpan.classList.contains("typing"))
cursorSpan.classList.add("typing"); typedTextSpan.textContent +=textArray[textArrayIndex].charAt(charIndex);
charIndex++; setTimeout(type, typingDelay); } else { cursorSpan.classList.remove("typing"); setTimeout(erase,
newTextDelay); } } function erase() { if (charIndex> 0) {
if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
charIndex--;
setTimeout(erase, erasingDelay);
}
else {
cursorSpan.classList.remove("typing");
textArrayIndex++;
if(textArrayIndex>=textArray.length) textArrayIndex=0;
setTimeout(type, typingDelay + 1100);
}
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// // Work carousel
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
// showSlides(slideIndex = n);
// }

// function showSlides(n) {
// var i;
// var slides = document.getElementsByClassName("mySlides");
// var dots = document.getElementsByClassName("dot");
// if (n > slides.length) {slideIndex = 1}
// if (n < 1) {slideIndex=slides.length} for (i=0; i < slides.length; i++) { slides[i].style.display="none" ; } for (i=0;
//   i < dots.length; i++) { dots[i].className=dots[i].className.replace(" active", "" ); }
//   slides[slideIndex-1].style.display="block" ; dots[slideIndex-1].className +=" active" ; }



