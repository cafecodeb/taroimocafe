document.addEventListener('DOMContentLoaded', function() {
    var rellax = new Rellax('.rellax');

    document.addEventListener('scroll', function() {
        const scrollPosition = window.pageXOffset || document.documentElement.scrollLeft;
        const horizontalParallaxElements = document.querySelectorAll('.horizontal-parallax');

        horizontalParallaxElements.forEach((elem) => {
            const speed = parseFloat(elem.getAttribute('data-speed'));
            elem.style.transform = 'translateX(' + (-scrollPosition * speed) + 'px)';
        });
    });
});
