document.addEventListener('DOMContentLoaded', function() {
    const fadeInSection = document.querySelector('.fade-in');
    setTimeout(() => {
        fadeInSection.classList.add('show');
    }, 500);
});
document.querySelector('.toggle-sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
  });