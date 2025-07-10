// Navigation bar activation on scroll
window.addEventListener('scroll', function() {
    const heroHeight = document.getElementById('hero').offsetHeight;
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY >= heroHeight - 100) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
}); 