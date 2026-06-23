const header = document.querySelector(".site-header");
const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".hero-controls button")];
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");
const result = document.querySelector(".pin-result");

let current = 0;
let timer = window.setInterval(nextSlide, 5200);

function showSlide(index) {
  current = index;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

function nextSlide() {
  showSlide((current + 1) % slides.length);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    window.clearInterval(timer);
    showSlide(index);
    timer = window.setInterval(nextSlide, 5200);
  });
});

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  menu.classList.toggle("open");
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".pin").forEach((pin) => {
  pin.addEventListener("click", () => {
    result.textContent = `${pin.dataset.label}: khuyến nghị dùng ván chống ẩm, lõi xanh và bề mặt phủ phù hợp tần suất sử dụng.`;
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.querySelector("button").textContent = "Đã Nhận Thông Tin";
});
