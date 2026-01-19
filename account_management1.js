export function accountManagement1() {
    const dealsButton = document.getElementById("deals_button");
    const overview = document.getElementById("Overview");
    const Overview_txt = document.getElementById("Overview_txt");
    dealsButton.addEventListener("click", () => {
      window.location.href = "account_management2.html";
      dealsButton;
    });

    if (document.title == "Account Management1") {
      overview.classList.add("bg-white");
      Overview_txt.classList.add("text-black");
    }
}
accountManagement1();