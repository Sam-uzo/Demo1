const hamburger = document.getElementById("menu");
const mobileMenu = document.querySelector(".mobile-menu");
const signIn = document.querySelector(".nav-btn1");
const getStarted = document.querySelector(".nav-btn2");
const joinAsHotel = document.querySelector(".hero-btn1");
const startAsBusiness = document.querySelector(".hero-btn2");
const startAsBusiness2 = document.querySelector(".cta-btn");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

signIn.addEventListener("click", () => {
  window.location.href = "localConnectOnboarding.html";
})

getStarted.addEventListener("click", () => {
    window.location.href = "localConnectOnboarding.html";
});

startAsBusiness.addEventListener("click", () => {
  window.location.href = "form.html";
});

joinAsHotel.addEventListener("click", () => {
  window.location.href = "create.html";
});

startAsBusiness2.addEventListener("click", () => {
  window.location.href = "form.html";
});