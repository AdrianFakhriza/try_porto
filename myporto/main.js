
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
    }
});

const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });


window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('animate');
});

window.addEventListener('load', function() {
    const aboutContent = document.querySelector('.about-content');
    aboutContent.classList.add('animate');
});

function animateOnScroll() {
    const sections = document.querySelectorAll('section'); 

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.5; 

        if (sectionTop < triggerPoint) {
            section.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); 

function animateOnScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.6;

        if (sectionTop < triggerPoint) {
            section.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

const contactButton = document.getElementById('contactButton');

contactButton.addEventListener('click', function() {
    const email = 'adrianfakhriza0@gmail.com'; 
    const subject = 'Subject Email'; 
    const body = 'Isi Email'; 

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank');
});