import { localBusinessOnboarding } from "./LocalBusiness Onboarding.js";
import { accountManagement1 } from "./account_management1.js";

const hamburger = document.getElementById("menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navButton1 = document.querySelector(".nav-btn1");
const navButton2 = document.querySelector(".nav-btn2");
const previousPage = document.referrer;
const startAsHotel = document.querySelector(".hero-btn1");
const joinAsBusiness = document.querySelector(".hero-btn2");
const joinAsBusiness2 = document.querySelector(".cta-btn");

document.addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});

navButton1.addEventListener("click", () => {
  function firstPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (previousPage.includes(`index.html`)) {
          resolve((window.location.href = `localBusiness Onboarding.html`));
        } else {
          reject("Couldn't get URL");
        }
      }, 1000);
    });
  }

  firstPromise();
});

navButton2.addEventListener("click", () => {
  window.location.href = `LocalConnect_Onboarding.html`;
});

startAsHotel.addEventListener("click", () => {
  window.location.href = `login.html`;
});

joinAsBusiness.addEventListener("click", () => {
  window.location.href = `form.html`;
});

joinAsBusiness2.addEventListener("click", () => {
  window.location.href = `form.html`;
});

businessOnboarding.localBusinessOnboarding(previousPage);
document.addEventListener("DOMContentLoaded", () => {

  if (window.location.href == "localBusiness Onboarding.html") {
    localBusinessOnboarding();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const firstAccountManagementPage = window.location.href;
  accountManagement1();
  if (firstAccountManagementPage.includes("account_management.html")) {
    console.log(window.location.href);
  }
});
