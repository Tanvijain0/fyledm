window.onload = function() {
    document.getElementById('checkbox').checked = false;
};




let currentIndex = 0;
const totalItems = document.querySelectorAll('.gallery-item').length;
const itemsPerSlide = Math.ceil(totalItems / 3); // Change this to fit the number of items per slide

function currentSlide(index) {
    const track = document.querySelector('.gallery-track');
    const itemWidth = document.querySelector('.gallery-item').offsetWidth;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${-index * itemsPerSlide * itemWidth}px)`;
    updateDots(index);
    currentIndex = index;
}

function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
    });
}

// Optional: auto-scroll functionality
setInterval(() => {
    currentIndex = (currentIndex + 1) % 3;
    currentSlide(currentIndex);
}, 5000);

document.addEventListener('DOMContentLoaded', () => {
    updateDots(currentIndex);
});


document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    const sendDataButton = document.getElementById('sendDataButton');

    checkbox.addEventListener('change', function() {
        sendDataButton.disabled = !checkbox.checked;
    });
});

document.getElementById('contactus').addEventListener('click', function() {
    var formContainer = document.getElementById('form-container');
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'flex';
    } else {
        formContainer.style.display = 'none';
    }
});

function showDiv(divId) {
    document.getElementById(divId).style.visibility = 'visible';
}



function changeImageSrc(newSrc) {
    var imageId = "image-to-change";
    var imgElement = document.getElementById(imageId);
    if (imgElement) {
        imgElement.src = newSrc;
    } else {
        console.error("Image with id " + imageId + " not found.");
    }
}

class SlideInFromLeftObserver {
    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-left');
                } else {
                    entry.target.classList.remove('slide-in-left');
                }
            });
        });
    }

    observe(element) {
        this.observer.observe(element);
    }
}

class SlideInFromRightObserver {
    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-right');
                } else {
                    entry.target.classList.remove('slide-in-right');
                }
            });
        });
    }

    observe(element) {
        this.observer.observe(element);
    }
}

class FadeInObserver {
    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.remove('fade-in');
                }
            });
        }, {
            threshold: 0.75 // Trigger when 75% of the element is in view
        });
    }

    observe(element) {
        this.observer.observe(element);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const slideInLeftObserver = new SlideInFromLeftObserver();
    const slideInRightObserver = new SlideInFromRightObserver();
    const fadeInObserver = new FadeInObserver();

    document.querySelectorAll('.slide-left').forEach(element => {
        slideInLeftObserver.observe(element);
    });

    document.querySelectorAll('.slide-right').forEach(element => {
        slideInRightObserver.observe(element);
    });

    document.querySelectorAll('.fade').forEach(element => {
        fadeInObserver.observe(element);
    });
});








function toggleNavbar() {
    var navbarMenu = document.getElementById('navbarMenu');
    if (navbarMenu.style.display === 'block') {
        navbarMenu.style.display = 'none';
    } else {
        navbarMenu.style.display = 'block';
    }
}
