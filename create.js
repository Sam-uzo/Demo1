const anchorBtn = document.getElementById("anchor-btn");
const loginSection = document.getElementById("login_section");
const approvedPage = document.getElementById("approved_page");
anchorBtn.addEventListener("click", () => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(loginSection.classList.remove("hidden"));
      reject(console.log("Couldn't Create account"));
    }, 3000);
  });
});
