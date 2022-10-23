let descriptionCards = document.querySelectorAll('.services-description');

descriptionCards.forEach(element => {
    element.addEventListener('mouseover', function() {
        element.classList.remove('text-muted');
    })
});

descriptionCards.forEach(element => {
    element.addEventListener('mouseout', function() {
        element.classList.add('text-muted');
    })
});

window.addEventListener('load', (event) => {
    setTimeout(function() {
        document.getElementById('special-offer-link')?.click();   //  ?.   for null 
    }, 5000)
});