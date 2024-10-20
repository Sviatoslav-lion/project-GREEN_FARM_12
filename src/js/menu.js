// Отримуємо елементи DOM
const menuBtn = document.getElementById('menu-open-btn'); // Кнопка для відкриття меню
const closeBtn = document.getElementById('menu-close-btn'); // Кнопка для закриття меню
const mobileMenu = document.getElementById('mobile-menu'); // Саме меню
const menuLinks = mobileMenu.querySelectorAll('a'); // Усі якірні посилання в меню

// Функція для відкриття меню
menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('is-open'); // Додаємо клас для відкриття меню
});

// Функція для закриття меню
closeBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('is-open'); // Видаляємо клас для закриття меню
});

// Додаємо подію для закриття меню при кліку на якірне посилання
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('is-open'); // Закриваємо меню при кліку на посилання
    });
});

