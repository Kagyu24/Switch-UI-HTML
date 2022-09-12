let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Get the button that opens the modal
const btns = document.getElementsByClassName("game-card");
const btnarr = Array.from(btns).enteries();
// Get the modal
const modals = document.getElementsByClassName("modal-bg");
// Get the <span> element that closes the modal
const close = document.getElementsByClassName("close");

for (let [index, btns] of btnarr) {
  toggleModal = () => {
    modals[index].style.visibility = "visible";
  };
  btns.addEventListener("click", toggleModal);
  close[index].addEventListener("click", toggleModal);
}




