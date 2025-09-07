// انتخاب عناصر
const hamburgerBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');

// افزودن رویداد کلیک به دکمه همبرگر
hamburgerBtn.addEventListener('click', () => {
    // تغییر حالت دکمه و منو
    hamburgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

// بستن منو با کلیک خارج از آن
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        menu.classList.remove('active');
    }
});
