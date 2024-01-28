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
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSliderWithFade();
  }
  
  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSliderWithFade();
  }
  
  function updateSliderWithFade() {
      slider.style.transition = "opacity 0.5s";
      slider.style.opacity = 0;
      setTimeout(() => {
          updateSlider();
          slider.style.opacity = 1;
      }, 500); 
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
})