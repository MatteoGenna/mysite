document.addEventListener('DOMContentLoaded', function() {
    const fadeInSection = document.querySelector('.fade-in');
    setTimeout(() => {
        fadeInSection.classList.add('show');
    }, 500);
});
