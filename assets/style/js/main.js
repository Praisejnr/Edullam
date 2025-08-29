const slides = document.querySelectorAll(".slide");
const slideContainer = document.querySelector(".img_slider");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navBar");
const counter = document.getElementById("counter");
const counter2 = document.getElementById("counter2");
const howText = document.querySelector(".how_text");
const howImage = document.getElementById("how_img");
const dots = document.querySelectorAll(".dots");
const carouselCard = document.querySelectorAll(".reviews_box");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

let index = 0;
function moveSlide() {
  index = (index + 1) % slides.length;
  slideContainer.style.transform = `translateX(-${index * 101}%)`;
}

setInterval(() => {
  moveSlide();
}, 3000);

let count = 0;
function usersCount() {
  if (count !== 30) {
    count += 1;
    counter.innerHTML = `${count}K+`;
    counter2.innerHTML = `${count}+`;
  } else {
    clearInterval(interval);
  }
}

const interval = setInterval(() => {
  usersCount();
}, 50);

const howData = [
  {
    h1tag: "Create your account",
    ptag: " Register your school with Edullam by providing some basic information and you're ready to go",
    src: "assets/images/how2.png",
  },
  {
    h1tag: "Setup and customize your school profile",
    ptag: "Have your profile customized and organize your school information, according to your unique needs.",
    src: "assets/images/how1.png",
  },
  {
    h1tag: "Dive into automation",
    ptag: "Get your attendance automate, real-time communication effortless, grading and results management.",
    src: "assets/images/how3.png",
  },
];

let currentIndex = 0;

function howAnimation() {
  if (currentIndex >= howData.length) {
    currentIndex = 0;
  }

  howText.classList.remove("slideinhow");
  howImage.classList.remove("slideinshow");

  setTimeout(() => {
    howText.innerHTML = `<h1>${howData[currentIndex].h1tag}</h1>
  <p>${howData[currentIndex].ptag}</p>
   <a href="#" class="btn">
            Get Started <i class="fa-solid fa-arrow-right"></i
          ></a>`;
    howImage.src = howData[currentIndex].src;

    howText.classList.add("slideinhow");
    howImage.classList.add("slideinshow");
    currentIndex++;
  }, 500);

  setTimeout(() => {
    howAnimation();
  }, 8000);
}

document.addEventListener("DOMContentLoaded", () => {
  howAnimation();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    carouselCard[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  });
});
