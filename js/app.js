(function () {
  'use strict';
  const heroForm = document.querySelector('.js-heroForm');
  const heroAlert = document.querySelector('.js-heroAlert');
  const heroInputEmail = document.querySelector('.js-heroInputEmail');
  const heroInputEmailClassName = heroInputEmail.classList[0];

  const showAlert = () => {
    heroInputEmail.classList.add(`${heroInputEmailClassName}--error`);
    heroAlert.setAttribute('role', 'alert');
    heroAlert.removeAttribute('hidden');
  };
  const hideAlert = () => {
    heroInputEmail.classList.remove(
      `${heroInputEmailClassName}--error`
    );
    heroAlert.removeAttribute('role', 'alert');
    heroAlert.setAttribute('hidden', '');
  };
  const validateEmail = e => {
    const email = heroInputEmail.value;
    const emailValidation =
      /^(?:[a-z0-9.]){2,30}@{1}(?:[a-z0-9-]){2,30}\.{1}(?:[a-z0-9]){2,3}(?:\.(?:[a-z0-9]){2,3})?$/;
    if (!emailValidation.test(email)) {
      e.preventDefault();
      showAlert();
      setTimeout(hideAlert, 3000);
    }
  };

  heroForm.addEventListener('submit', validateEmail);
})();
