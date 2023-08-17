//Payment Page

  document.addEventListener("DOMContentLoaded", function () {
    // Get references to form elements
    const form = document.querySelector(".payment-form form");
    const fullNameInput = document.getElementById("fullName");
    const cardNumberInput = document.getElementById("cardNumber");
    const expInput = document.getElementById("exp");
    const cvcInput = document.getElementById("cvc");
    
    // Event listener for form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      // Perform form validation
      if (validateForm()) {
        alert("Payment successful! Redirecting to the next step.");
        window.location.href = "./Details.html"; // Redirect to the next page
      }
    });

    // Function to validate form inputs
    function validateForm() {
      const fullName = fullNameInput.value.trim();
      const cardNumber = cardNumberInput.value.trim();
      const exp = expInput.value.trim();
      const cvc = cvcInput.value.trim();

      if (fullName === "") {
        alert("Please enter your full name.");
        fullNameInput.focus();
        return false;
      }

      if (cardNumber === "" || !/^\d{16}$/.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        cardNumberInput.focus();
        return false;
      }

      if (exp === "" || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(exp)) {
        alert("Please enter a valid expiration date (MM/YY).");
        expInput.focus();
        return false;
      }

      if (cvc === "" || !/^\d{3}$/.test(cvc)) {
        alert("Please enter a valid 3-digit CVV/CVC number.");
        cvcInput.focus();
        return false;
      }
      return true;
    }
  });