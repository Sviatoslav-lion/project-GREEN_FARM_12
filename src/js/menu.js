// Отримуємо елементи DOM
const menuBtn = document.getElementById('menu-open-btn'); // Кнопка для відкриття меню
const closeBtn = document.getElementById('menu-close-btn'); // Кнопка для закриття меню
const overlay = document.getElementById('overlay-menu'); // Overlay
const mobileMenu = document.getElementById('mobile-menu'); // Саме меню
const menuLinks = mobileMenu.querySelectorAll('a'); // Усі якірні посилання в меню

// Функція для відкриття меню
menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('is-open');
    overlay.classList.add('active');// Додаємо клас для відкриття меню та оверлею
});

// Функція для закриття меню
closeBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('is-open');
    overlay.classList.remove('active');// Видаляємо клас для закриття меню та оверлею
});

// Додаємо подію для закриття меню при кліку на якірне посилання
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('is-open');
        overlay.classList.remove('active');// Закриваємо меню та оверлей при кліку на посилання
    });
});

