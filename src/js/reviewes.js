document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.reviews-items li'); // Виправлено селектор
  let currentSlide = 0;
  let intervalTime = 2500;
  let visibleSlides = 1;
  let slideInterval;

  function getVisibleSlides() {
    if (window.innerWidth <= 1279 && window.innerWidth >= 768) {
      return 2;
    } else if (window.innerWidth > 1279) {
      return 3;
    }
    return 1;
  }

  function showSlide(index) {
    testimonials.forEach(testimonial => {
      testimonial.style.display = 'none'; // Приховуємо всі слайди
    });

    for (let i = 0; i < visibleSlides; i++) {
      const slideIndex = (index + i) % testimonials.length;
      testimonials[slideIndex].style.display = 'block'; // Показуємо потрібні слайди
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + visibleSlides) % testimonials.length;
    showSlide(currentSlide);
  }

  function startSlideshow() {
    visibleSlides = getVisibleSlides(); // Визначаємо кількість слайдів, які треба показувати
    showSlide(currentSlide); // Відображаємо початкові слайди
    if (!slideInterval) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }

  function stopSlideshow() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  // Запускаємо слайдшоу при завантаженні сторінки
  startSlideshow();

  // Оновлюємо слайди при зміні розміру вікна
  window.addEventListener('resize', function () {
    stopSlideshow();
    startSlideshow();
  });
});
