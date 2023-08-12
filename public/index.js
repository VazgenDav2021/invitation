// JavaScript
const lazySVGs = document.querySelectorAll('.img');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const svgElement = entry.target;
            const svgSrc = svgElement.getAttribute('data-src');
            svgElement.innerHTML = `<img src="${svgSrc}" alt="Lazy SVG">`;
            observer.unobserve(svgElement);
        }
    });
});

document.addEventListener("DOMContentLoaded",()=>{
    lazySVGs.forEach(svg => {
        observer.observe(svg);
    });
});