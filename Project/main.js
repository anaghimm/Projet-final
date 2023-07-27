const day = document.getElementById("day");
day.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    day.classList.toggle("fa-sun");
    day.classList.toggle("fa-moon");
    if (document.body.classList.contains("darkmode")) {
        updateBackgroundImages('photo-1603366615917-1fa6dad5c4fa.jpg');
    } else {
        updateBackgroundImages('pexels-aleksandar-pasaric-1323712.jpg');
    }
});
function updateBackgroundImages(imagePath) {
    const aboutSection = document.getElementById('about');
    const servicesSection = document.getElementById('services');
    const quotesSection = document.getElementById('quotes');

    if (aboutSection) {
        aboutSection.style.backgroundImage = `url('${imagePath}')`;
    }

    if (servicesSection) {
        servicesSection.style.backgroundImage = `url('${imagePath}')`;
    }

    if (quotesSection) {
        quotesSection.style.backgroundImage = `url('${imagePath}')`;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Initialize the Swiper
    var swiper = new Swiper(".mySwiper", {
        loop: true,
      slidesPerView: 1,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
