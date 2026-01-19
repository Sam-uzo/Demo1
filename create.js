// const anchorBtn = document.getElementById("anchor-btn");
// const loginSection = document.getElementById("login_section");
// const approvedPage = document.getElementById("approved_page");
// anchorBtn.addEventListener("click", () => {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(loginSection.classList.remove("hidden"));
//       reject(console.log("Couldn't Create account"));
//     }, 3000);
//   });
//     p.then(f => {
//         loginSection.classList.remove("hidden");
//     })
// });

const anchorBtn = document.getElementById("anchor-btn");
const loginSection = document.getElementById("login_section");
const approvedPage = document.getElementById("approved_page");

anchorBtn.addEventListener("click", () => {
  // 1. First hide the form/current page
  approvedPage.classList.add("hidden");

  // 2. Create promise that resolves after 3 seconds
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // Just resolve, don't pass anything
    }, 3000);
  });

  // 3. After 3 seconds, show login section
  p.then(() => {
    loginSection.classList.remove("hidden");
  });
});