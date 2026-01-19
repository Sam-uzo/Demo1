const dealsButton = document.getElementById("deals_btn");
const deals_txt = document.getElementById("deals_txt");
const deals_img = document.getElementById("deals_img");
const addOfferingButton = document.getElementById("add_offering")

const overviewButton = document.getElementById(`overview_btn`);
const $Button = document.getElementById(``);
const _Button = document.getElementById(``);
const eButton = document.getElementById(``);
const cButton = document.getElementById(``);
const Button = document.getElementById(``);

if (document.title == "Account Management2") {
    dealsButton.classList.add("bg-white");
    deals_txt.classList.add("text-black");
    deals_img.classList.add("brightness-0")
}

addOfferingButton.addEventListener("click", () => {
    window.location.href = "account_management3.html";
})
overviewButton.addEventListener("click", () => {
  window.location.href = `account_management1.html`;
});