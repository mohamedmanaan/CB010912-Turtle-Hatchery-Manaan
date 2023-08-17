// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get references to form elements
  const form = document.querySelector(".details-form form");
  const fullNameInput = document.getElementById("fullName");
  const mobileNumberInput = document.getElementById("mobileNumber");
  const emailInput = document.getElementById("email");
  const confirmEmailInput = document.getElementById("confirmEmail");
  const genderInput = document.getElementById("gender");
  const countryInput = document.getElementById("country");
  const submitButton = document.querySelector(".submit-btn");

  // Function to update summary table and save to local storage
  function updateSummaryAndSave() {
    const fullName = fullNameInput.value.trim();
    const mobileNumber = mobileNumberInput.value.trim();
    const email = emailInput.value.trim();
    const gender = genderInput.value.trim();
    const country = countryInput.value.trim();

    // Update the summary table with user's input
    document.getElementById("fullName").querySelector("td:nth-child(2)").textContent = fullName;
    document.getElementById("mobileNumber").querySelector("td:nth-child(2)").textContent = mobileNumber;
    document.getElementById("email").querySelector("td:nth-child(2)").textContent = email;
    document.getElementById("gender").querySelector("td:nth-child(2)").textContent = gender;
    document.getElementById("country").querySelector("td:nth-child(2)").textContent = country;

    // Save entered details to local storage
    const userDetails = {
      fullName: fullName,
      mobileNumber: mobileNumber,
      email: email,
      gender: gender,
      country: country
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    alert("Details updated and saved to local storage.");
  }

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Update summary table and save to local storage
    updateSummaryAndSave();

  });

  // Event listener for "Confirm with Purchase" button
  submitButton.addEventListener("click", function () {
    // Update summary table and save to local storage
    updateSummaryAndSave();

    alert("Details confirmed with purchase! Redirecting to the next step.");
    window.location.href = "./PaymentPage.html"; // Redirect to the next page
  });
});