// script.js
document.addEventListener('DOMContentLoaded', function () {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach((faq, index) => {
        // add an all variable in th chevronDown 
        const chevronDown = faq.querySelector('.fa-chevron-down');

        chevronDown.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents the click event from reaching the .faq container

            const clickedFaq = faqs[index];

            // Hide the clicked .faq and show the next one
            clickedFaq.style.display = 'none';
              // Check if there is a next .faq
              if (index + 1 < faqs.length) {
                const nextFaq = faqs[index + 1];
                nextFaq.style.display = 'block';
            }
        });

        faq.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});
