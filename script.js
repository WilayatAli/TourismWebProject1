// refereh page to go top script
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

// nav-js
const menuBtn = document.querySelector(".menu-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const dropdownItems = document.querySelectorAll(".dropdown");

menuBtn.addEventListener("click", () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
});

cancelBtn.addEventListener("click", () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
});

dropdownItems.forEach((dropdown) => {
  const dropdownToggle = dropdown.querySelector("a");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle("active");
  });
});


let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex].style.display = "block";
}

//Contact-Form CSS
//booking form
const form = document.querySelector('#tour-booking-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  // const tourType = document.querySelector('#tour-type').value;
  // const tourDate = document.querySelector('#tour-date').value;
  // const numberOfGuests = document.querySelector('#number-of-guests').value;
  
  // Do something with the form data, such as sending it to a server

});

// image galley js code start here

document.addEventListener("DOMContentLoaded", function() {
  // Add active class to the "Show all" button
  var showAllButton = document.querySelector("#myBtnContainer .btn");
  showAllButton.classList.add("active");
  
  // Display all images by default
  filterSelection("all");
});

function filterSelection(c) {
  var x = document.getElementsByClassName("columnx");
  if (c === "all") {
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "block";
      if (!x[i].classList.contains("show")) {
        x[i].classList.add("show");
      }
    }
  } else {
    for (var i = 0; i < x.length; i++) {
      if (x[i].classList.contains(c)) {
        x[i].style.display = "block";
        if (!x[i].classList.contains("show")) {
          x[i].classList.add("show");
        }
      } else {
        x[i].style.display = "none";
        if (x[i].classList.contains("show")) {
          x[i].classList.remove("show");
        }
      }
    }
  }
}

// Add event listeners to the buttons
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    
    // Remove active class from all buttons
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.remove("active");
    }
    
    // Add active class to the clicked button
    this.classList.add("active");
  });
}



// pkag 2 moble touch
$(document).ready(function () {
  // Touch-enabled hover effect
  $('..event-info').on('touchstart', function (e) {
    e.preventDefault(); // Prevent the click event from firing

    // Check if the clicked element has the "active" class
    if ($(this).hasClass('active')) {
      // If it has the "active" class, remove it
      $(this).removeClass('active');
    } else {
      // If it doesn't have the "active" class, remove the "active" class from all other elements
      $('.itemz-container').removeClass('active');
      // Add the "active" class to the clicked element
      $(this).addClass('active');
    }
  });
});



