// Function to animate smooth scrolling
function smoothScroll(target, duration) {
 var targetElement = document.querySelector(target);
 var targetPosition = targetElement.offsetTop;
 var footerHeight = document.querySelector("footer").offsetHeight; // Get the height of the footer
 var startPosition = window.pageYOffset;
 var distance = targetPosition - startPosition;
 var startTime = null;

 function animation(currentTime) {
   if (startTime === null) startTime = currentTime;
   var timeElapsed = currentTime - startTime;
   var scrollAmount = ease(timeElapsed, startPosition, distance, duration);
   window.scrollTo(0, scrollAmount);

   // Stop scrolling when it reaches within the footer height range
   if (timeElapsed < duration && scrollAmount + window.innerHeight < document.documentElement.offsetHeight - footerHeight) {
     requestAnimationFrame(animation);
   }
 }

 // Easing function to add smoothness to the scrolling animation
 function ease(t, b, c, d) {
   t /= d / 2;
   if (t < 1) return (c / 2) * t * t + b;
   t--;
   return (-c / 2) * (t * (t - 2) - 1) + b;
 }

 requestAnimationFrame(animation);
}

// Smooth scrolling when a navigation link is clicked
var navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function (link) {
 link.addEventListener("click", function (e) {
   e.preventDefault();
   var target = this.getAttribute("href");
   var duration = 1000; // Adjust the duration (in milliseconds) as needed
   smoothScroll(target, duration);
 });
});
