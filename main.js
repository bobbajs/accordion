(() => {
    const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
    const toggleAccordionBody = (item) => {
        if (item.classList.contains('active')) {
            item.nextElementSibling.style.height =  item.nextElementSibling.scrollHeight + 'px';
        } else {
            item.nextElementSibling.style.height = 0;
        }
    }
    accordionItemHeaders.forEach(item => {
        item.addEventListener('click', function(e) {
            // can only have 1 open
            accordionItemHeaders.forEach(item => {
                if (item !== e.target) {
                    item.classList.remove('active');
                    toggleAccordionBody(item);
                }
            });

            item.classList.toggle('active');
            toggleAccordionBody(item);

        });
    });

})();