document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const paginationCircles = document.querySelectorAll(".pagination .circle");
  let interval;

  const firstSlideClone = slides[0].cloneNode(true);
  slider.appendChild(firstSlideClone);

  function updateSlider() {
    const translateValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
    updatePagination();
  }

  function updatePagination() {
    paginationCircles.forEach((circle, index) => {
      circle.classList.toggle("active", index === currentIndex % totalSlides);
    });
  }

  function nextSlide() {
    if (currentIndex < totalSlides) {
      currentIndex++;
    } else {
      slider.style.transition = "none";
      currentIndex = 0;
      setTimeout(() => {
        slider.style.transition = "";
        nextSlide();
      }, 0);
    }
    updateSlider();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      slider.style.transition = "none";
      currentIndex = totalSlides;
      setTimeout(() => {
        slider.style.transition = "";
        prevSlide();
      }, 0);
    }
    updateSlider();
  }
  leftArrow.addEventListener("click", function () {
    clearInterval(interval);
    prevSlide();
  });

  rightArrow.addEventListener("click", function () {
    clearInterval(interval);
    nextSlide();
  });

  paginationCircles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
      clearInterval(interval);
    });
  });

  interval = setInterval(nextSlide, 3000);

  updatePagination();
});       