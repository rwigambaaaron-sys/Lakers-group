document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.inquiry-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Inquiry submitted! We will contact you soon.');
      form.reset();
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.property-slider');
  if (!slider) return;

  const slides = slider.querySelector('.property-slides-wrapper');
  const images = slides.querySelectorAll('img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    if (i < 0) index = images.length - 1;
    else if (i >= images.length) index = 0;
    else index = i;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.addEventListener('click', () => showSlide(index - 1));
  next.addEventListener('click', () => showSlide(index + 1));

  setInterval(() => showSlide(index + 1), 7000);
});



document.querySelectorAll(".slider").forEach((slider) => {
  const slides = slider.querySelectorAll("img");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  const counter = slider.querySelector(".counter");

  let index = 0;
  const total = slides.length;

  function updateSlide() {
    slides.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
    counter.textContent = `${index + 1} / ${total}`;
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateSlide();
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    updateSlide();
  });

  updateSlide();
});
