// Плавный скролл
function scrollToNext() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

// Управление музыкой (только по клику на кнопку)
document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('musicBtn');
    const musicText = document.getElementById('musicText');
    const bgMusic = document.getElementById('bgMusic');
    
    // Устанавливаем комфортную громкость
    bgMusic.volume = 0.4;

    // Обработка клика по кнопке
    musicBtn.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.classList.add('playing');
            musicText.textContent = "Нажмите, чтобы отключить музыку";
        } else {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
            musicText.textContent = "Нажмите, чтобы включить музыку";
        }
    });
});

// --- СЛАЙДЕР 1: ТЁТЯ ---
let currentSlideAunt = 0;
const slidesAunt = document.querySelectorAll('#slider-aunt .slide');
const dotsContainerAunt = document.getElementById('dots-aunt');
const totalSlidesAunt = slidesAunt.length;

if (dotsContainerAunt) {
    for (let i = 0; i < totalSlidesAunt; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlideAunt(i));
        dotsContainerAunt.appendChild(dot);
    }
}

function moveSlideAunt(direction) {
    currentSlideAunt = currentSlideAunt + direction;
    if (currentSlideAunt >= totalSlidesAunt) currentSlideAunt = 0;
    else if (currentSlideAunt < 0) currentSlideAunt = totalSlidesAunt - 1;
    updateSliderAunt();
}

function goToSlideAunt(index) {
    currentSlideAunt = index;
    updateSliderAunt();
}

function updateSliderAunt() {
    const slider = document.getElementById('slider-aunt');
    if (slider) {
        slider.style.transform = `translateX(-${currentSlideAunt * 100}%)`;
    }
    const dots = document.querySelectorAll('#dots-aunt .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideAunt);
    });
}

// --- СЛАЙДЕР 2: МЕСТО ---
let currentSlidePlace = 0;
const slidesPlace = document.querySelectorAll('#slider-place .slide');
const dotsContainerPlace = document.getElementById('dots-place');
const totalSlidesPlace = slidesPlace.length;

if (dotsContainerPlace) {
    for (let i = 0; i < totalSlidesPlace; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlidePlace(i));
        dotsContainerPlace.appendChild(dot);
    }
}

function moveSlidePlace(direction) {
    currentSlidePlace = currentSlidePlace + direction;
    if (currentSlidePlace >= totalSlidesPlace) currentSlidePlace = 0;
    else if (currentSlidePlace < 0) currentSlidePlace = totalSlidesPlace - 1;
    updateSliderPlace();
}

function goToSlidePlace(index) {
    currentSlidePlace = index;
    updateSliderPlace();
}

function updateSliderPlace() {
    const slider = document.getElementById('slider-place');
    if (slider) {
        slider.style.transform = `translateX(-${currentSlidePlace * 100}%)`;
    }
    const dots = document.querySelectorAll('#dots-place .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlidePlace);
    });
}

// --- АНИМАЦИЯ ПОЯВЛЕНИЯ ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// --- ТАЙМЕР (5 ДЕКАБРЯ 2026, 17:00 ПО ТУВЕ) ---
const targetDate = new Date('December 5, 2026 17:00:00 GMT+0700'); 

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff < 0) {
        document.getElementById('days').textContent = "00";
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();