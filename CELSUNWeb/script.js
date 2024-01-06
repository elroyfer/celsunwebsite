document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest ('[data-dropdown]') != null) return
    let currentDropdown
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown=> {
            if(dropdown === currentDropdown) return
            dropdown.classList.remove('active')
        })
})


let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 2 seconds (adjust as needed)
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", showSlides);




// Get all elements with the class "openModal"
const openButtons = document.querySelectorAll('.openModal');

// Add click event listener to each "openModal" button
openButtons.forEach((openButton) => {
    openButton.addEventListener('click', () => {
        // Find the closest modal based on the button's parent section
        const modal = openButton.closest('.product-section').querySelector('.modal');
        modal.classList.add('open');
    });
});

// Get all elements with the class "closeModal"
const closeButtons = document.querySelectorAll('.closeModal');

// Add click event listener to each "closeModal" button
closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        // Find the closest modal based on the button's parent section
        const modal = closeButton.closest('.product-section').querySelector('.modal');
        modal.classList.remove('open');
    });
});

