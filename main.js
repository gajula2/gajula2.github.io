
window.onscroll = function () {
  var offset1 = document.getElementById('video').offsetTop;
  var offset2 = document.getElementById('aboutMe').offsetTop;
  var offset3 = document.getElementById('Quote').offsetTop;
  var offset4 = document.getElementById('LearnMore').offsetTop;
  var offset5 = document.getElementById('Carousel').offsetTop;
  var scrollpos = (window.scrollY || window.scollTop || document.getElementsByTagName("html")[0].scrollTop)+ 35;

  if(scrollpos < offset2) {
    document.getElementById('vid').style.color = "#ffffff";
    document.getElementById('about').style.color = "#ECA400";
    document.getElementById('quote').style.color = "#ECA400";
    document.getElementById('work').style.color = "#ECA400";
    document.getElementById('samp').style.color = "#ECA400";
  } else if(scrollpos >= offset2 && scrollpos < offset3) {
    document.getElementById('vid').style.color = "#ECA400";
    document.getElementById('about').style.color = "#ffffff";
    document.getElementById('quote').style.color = "#ECA400";
    document.getElementById('work').style.color = "#ECA400";
    document.getElementById('samp').style.color = "#ECA400";
  } else if(scrollpos >= offset3 && scrollpos < offset4) {
    document.getElementById('vid').style.color = "#ECA400";
    document.getElementById('about').style.color = "#ECA400";
    document.getElementById('quote').style.color = "#ffffff";
    document.getElementById('work').style.color = "#ECA400";
    document.getElementById('samp').style.color = "#ECA400";
  } else if(scrollpos >= offset4 && scrollpos < offset5) {
    document.getElementById('vid').style.color = "#ECA400";
    document.getElementById('about').style.color = "#ECA400";
    document.getElementById('quote').style.color = "#ECA400";
    document.getElementById('work').style.color = "#ffffff";
    document.getElementById('samp').style.color = "#ECA400";
  }else{
    document.getElementById('vid').style.color = "#ECA400";
    document.getElementById('about').style.color = "#ECA400";
    document.getElementById('quote').style.color = "#ECA400";
    document.getElementById('work').style.color = "#ECA400";
    document.getElementById('samp').style.color = "#ffffff";
  }
};

//source: https://codepen.io/rleve/pen/iCbgy
// Function to animate the scroll
var smoothScroll = function (anchor, duration)
{
    // Calculate how far and how fast to scroll
    var startLocation = window.scrollY || window.scollTop || document.getElementsByTagName("html")[0].scrollTop;
    var endLocation = anchor.offsetTop;
    var distance = endLocation - startLocation;
    var increments = distance/(duration/75);
    var stopAnimation;

    // Scroll the page by an increment, and check if it's time to stop
    var animateScroll = function () {
        window.scrollBy(0, increments);
        stopAnimation();
    };

    // If scrolling down
    if ( increments >= 0 ) {
        // Stop animation when you reach the anchor OR the bottom of the page
        stopAnimation = function () {
            var travelled = window.pageYOffset;
            if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                clearInterval(runAnimation);
            }
        };
    }
    // If scrolling up
    else {
        // Stop animation when you reach the anchor OR the top of the page
        stopAnimation = function () {
            var travelled = window.scrollY || window.scollTop || document.getElementsByTagName("html")[0].scrollTop;
            if ( travelled <= (endLocation || 0) ) {
                clearInterval(runAnimation);
            }
        };
    }

    // Loop the animation function
    var runAnimation = setInterval(animateScroll, 16);

};

// Define smooth scroll links
var scrollToggle = document.querySelectorAll('.scroll');

// For each smooth scroll link
[].forEach.call(scrollToggle, function (toggle) {

  // When the smooth scroll link is clicked
  toggle.addEventListener('click', function(e) {

    // Prevent the default link behavior
    e.preventDefault();

    // Get anchor link and calculate distance from the top
    var dataID = toggle.getAttribute('href');
    var dataTarget = document.querySelector(dataID);
    var dataSpeed = toggle.getAttribute('scrollSpeed');

    // If the anchor exists
    if (dataTarget) {
      // Scroll to the anchor
      smoothScroll(dataTarget, dataSpeed || 500);
    }

    }, false);

});

var modal = document.getElementById('modalWindow');
var modal2 = document.getElementById('modalWindow2');
var modal3 = document.getElementById('modalWindow3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');

var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");

var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
}

img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
}
var span = document.getElementsByClassName("close")[0];

var close1 = document.getElementById('close1');

close1.onclick = function() {
  modal.style.display = "none";
}

close2.onclick = function() {
  modal2.style.display = "none";
}

close3.onclick = function() {
  modal3.style.display = "none";
}

function navResize() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            smallerAt = 300,
            header = document.querySelector("header");
        if (distanceY > smallerAt) {
            document.getElementById('header').setAttribute("class", "smaller")
        } else {
          document.getElementById('header').removeAttribute("class", "smaller")
        }
    });
}
window.onload = navResize();

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
 showSlides(slideIndex = n);
}

function plusSlides(n){
 showSlides(slideIndex += n);
}

document.getElementById('prev').onclick= function(){
  plusSlides(-1);
}
document.getElementById('next').onclick= function(){
  plusSlides(1);
}

function showSlides(n){

  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}
