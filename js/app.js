(function () {
  "use strict";
  const heroForm = document.querySelector(".js-heroForm");

  const showAlert = emailInput => {
    const heroAlert = document.querySelector(".js-heroAlert");
    const inputClassName = emailInput.classList[0];

    emailInput.classList.add(`${inputClassName}--error`);
    heroAlert.removeAttribute("hidden");
  };
  const validateEmail = e => {
    const heroInputEmail = document.querySelector(
      ".js-heroInputEmail"
    );
    const email = heroInputEmail.value;
    const emailValidation =
      /^(?:[a-z0-9\.]){2,30}@{1}(?:[a-z0-9-]){2,30}\.{1}(?:[a-z0-9]){2,3}(\.?((?:[a-z0-9]){2,3}))?$/;
    if (!emailValidation.test(email)) {
      e.preventDefault();
      showAlert(heroInputEmail);
    }
  };

  heroForm.addEventListener("submit", validateEmail);
})();
