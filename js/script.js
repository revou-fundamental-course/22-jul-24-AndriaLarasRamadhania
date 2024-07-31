document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = document.getElementById("age").value.trim();

        if (!name) {
            alert("Please enter your name.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!age || isNaN(age) || age <= 0) {
            alert("Please enter a valid age.");
            return;
        }

        alert("Form submitted successfully!");
        form.submit();
    });
});


// Slideshow functionality
const banner = document.querySelector('.konten-utama-banner');
const images = [
    "https://i.pinimg.com/564x/bc/e4/85/bce4850c2b558270597feabb7943df86.jpg",
    "https://i.pinimg.com/564x/13/db/04/13db04c05310a62628e3a344fa728f17.jpg",
    "https://i.pinimg.com/564x/2a/6b/b5/2a6bb52a1e7c01c28744093fb1f29982.jpg",
    "https://i.pinimg.com/564x/43/77/17/4377173eb42e387ce028fd5849e1a0d3.jpg"
];
let currentIndex = 0;

function changeBannerImage() {
    currentIndex = (currentIndex + 1) % images.length;
    banner.style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBannerImage, 4000); 