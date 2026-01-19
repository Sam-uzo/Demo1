const localBusinessBtn = document.getElementById("local_business_button");
const mainBody = document.getElementById("Body");
console.log(localBusinessBtn);
const hotelButton = document.getElementById("hotel_button");
const guestButton = document.getElementById("guest_button");

localBusinessBtn.addEventListener("click", () => {
  window.location.href = "form.html";
  // setTimeout(
  //   () => alert("Click on New Account to create your business account"),
  //   200,
  // );
}); 

hotelButton.addEventListener("click", () => {
  window.location.href = "create.html";
}); 

guestButton.onclick = function () {
  console.log("Clicked guest button");
};
