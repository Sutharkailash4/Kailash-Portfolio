const matrixTitle = document.querySelector('.matrix');
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const originalText = matrixTitle ? matrixTitle.innerText : '';

let step = 0;
let matrixInterval = null;

const runMatrixEffect = () => {
    clearInterval(matrixInterval);
    matrixInterval = setInterval(() => {
        const scrambled = originalText
            .split('')
            .map((char, index) => {
                if (char === ' ') return ' ';
                if (index < step) return originalText[index];
                return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');

        matrixTitle.innerText = scrambled;
        step += 0.3;

        if (step >= originalText.length) {
            clearInterval(matrixInterval);
            matrixTitle.innerText = originalText;
            step = 0;
        }
    }, 40);
};

if (matrixTitle) {
    matrixTitle.addEventListener('mouseenter', runMatrixEffect);
    matrixTitle.addEventListener('mouseleave', () => {
        clearInterval(matrixInterval);
        matrixTitle.innerText = originalText;
        step = 0;
    });
}

const navLinks = document.querySelectorAll('.navigation_links');
navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();