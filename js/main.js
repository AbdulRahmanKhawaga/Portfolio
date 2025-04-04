//active link
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.hash; 
    
    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
            localStorage.setItem("activeLink", this.getAttribute("href"));
        });
    });

    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
        links.forEach(link => {
            if (link.getAttribute("href") === storedActiveLink) {
                link.classList.add("active");
            }
        });
    }
});


// Typed Name Effect
document.addEventListener("DOMContentLoaded", function () {
    const name = "Hello, I'm AbdulRahman Khawaga";
    const typedNameElement = document.getElementById("typewriter");
    let index = 0;

    function typeWriter() {
    if (index < name.length) {
        typedNameElement.textContent += name.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
    }
    typeWriter();
});

  //Scroll to top button
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("scrollBtn");

    window.onscroll = function () {
        if (window.scrollY >= 500) {
            btn.style.display = "block";
            btn.style.color = "white";
        } else {
            btn.style.display = "none";
        }
    };

    btn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
});

//carousel
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    let currentIndex = 0;
    
    dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
        updateDots(index);
        currentIndex = index;
    });
    });
    
    function goToSlide(index) {
      track.style.transform = 'translateX(' + (-100 * index) + '%)';
    }
    
    function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
        dot.classList.add('active');
        } else {
        dot.classList.remove('active');
        }
    });
    }
    
    const autoRotateInterval = 7000; 
    
    setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
    updateDots(currentIndex);
    }, autoRotateInterval);
});


window.addEventListener('load', function () {
    setTimeout(function () {
    window.scrollTo(0, 0);
    }, 0);
});