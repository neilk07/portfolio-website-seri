 $(document).ready(function() {
  // Function to animate smooth scrolling
  function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    if(!targetElement) {return;}
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

     if (timeElapsed < duration && scrollAmount + window.innerHeight < document.documentElement.offsetHeight - footerHeight) {
      requestAnimationFrame(animation);
    }
  }
   
     // Calculate the maximum scroll position before reaching the footer
     /*var maxScrollPosition = document.documentElement.scrollHeight - footerHeight - window.innerHeight;
   
     // Stop scrolling when it reaches the maximum scroll position
     if (scrollAmount < maxScrollPosition && timeElapsed < duration) {
       requestAnimationFrame(animation);
     }
   }*/
   

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

  // Smooth scrolling from the footer to the top of the page
var footerIconTop = document.querySelector(".footer-iconTop a");
footerIconTop.addEventListener("click", function (e) {
  e.preventDefault();
  smoothScrollTop(1000); // Adjust the duration (in milliseconds) as needed
});

function smoothScrollTop(duration) {
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var scrollAmount = ease(timeElapsed, startPosition, -startPosition, duration);
    window.scrollTo(0, scrollAmount);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
 // Back-to-top button functionality
  $('.scroll-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  // Sticky header
  window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // Show the back-to-top button when scrolling down
  window.addEventListener("scroll", function () {
  var footerIconTop = document.querySelector(".footer-iconTop a");
  if (window.scrollY > 10) { // Change 500 to your desired scroll position
   footerIconTop.classList.add("show");
  } else {
   footerIconTop.classList.remove("show");
  }
 });

   // Show the back-to-top button on scroll
   /*$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scroll-to-top').addClass('active');
    } else {
      $('.scroll-to-top').removeClass('active');
    }
  });

   // To show the footer icon
   footerIconTop.classList.add("show");
   // To hide the footer icon
   footerIconTop.classList.remove("show");

  // Smooth scrolling from the footer to the top of the page
  /*var footerIconTop = document.querySelector(".footer-iconTop a");
  
   footerIconTop.addEventListener("click", function (e) {
    e.preventDefault();
    var target = "#home";
    var duration = 1000; // Adjust the duration (in milliseconds) as needed
    smoothScroll(target, duration);
  });*/

});

//toggle icon bar//
 /*let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 
 menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
 
 }*/

 // JavaScript or jQuery

/*document.addEventListener("DOMContentLoaded", function () {
 var menuToggle = document.querySelector(".menu-toggle");
 var navbar = document.querySelector(".navbar");

 menuToggle.addEventListener("click", function () {
   menuToggle.classList.toggle("active");
   navbar.classList.toggle("active");
 });
});*/

 
 const menuToggle = document.getElementById('menu-toggle');
 const navbar = document.getElementById('navbar');
 
 menuToggle.addEventListener('click', () => {
   navbar.classList.toggle('active');
   menuToggle.classList.toggle('active');
 });
 
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');
 
 
 window.onscroll = () => {
 
 sections.forEach(sec => {
   let top = window.scrollY;
   let offset = sec.offsetTop - 100;
   let height = sec.offsetHeight;
   let id = sec.getAttribute('id');
 
   if(top >= offset && top < offset + height) {
    //active navbar links
    navLinks.forEach(links => {
     links.classList.remove('active');
     document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });
 
   }
   
   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);
 
 });
 
 
 }