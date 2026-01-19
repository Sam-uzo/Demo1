const addOffer = document.getElementById("add_offering3");

addOffer.addEventListener("click", () => {
  window.location.href = `account_management4.html`;

    
});

const imageInput = document.getElementById("image_input");
const input = document.createElement(`input`)
const offerImage = document.getElementById(`offer_image`);



imageInput.addEventListener("click", () => {
  input.type = "file";
  input.accept = "image/*";
  input.onchange = async (e) => {
    const file = e.target.files[0];
    const cloudinaryUrl = await sendToCloudinary(file);
    console.log("Your photo lives at:"+ cloudinaryUrl);
    offerImage.src =cloudinaryUrl;
  };
  input.click();

  // // When user picks a photo
  // photoInput.onchange = async (event) => {
  //   // 1. Get chosen photo
  //   const photo = event.target.files[0];

  //   // 2. Send to Cloudinary
  //   const cloudinaryUrl = await sendToCloudinary(photo);

  //   // 3. Now you have: https://res.cloudinary.com/your-photo.jpg
  //   console.log("Your photo lives at:", cloudinaryUrl);
  // };

  async function sendToCloudinary(photo) {
    const package = new FormData();
    package.append("file", photo);
    package.append("upload_preset", "local_connect_preset");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dk10vcfuz/upload",
      { method: "POST", body: package },
    );
    const data = await response.json();
    return data.secure_url;
  }
})

