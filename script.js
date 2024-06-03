const newsletter = document.querySelector('.newsletter-modal');
const newForm = document.getElementById('news-form');

window.addEventListener('load', () => {
    setTimeout(() => {
        newsletter.style.display = 'block';
    }, 3000);
});

newsletter.addEventListener('click', (e) => {
    if (e.target == newsletter) {
        newsletter.style.display = 'none';
    }
});

newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletter.style.display = 'none';
});
