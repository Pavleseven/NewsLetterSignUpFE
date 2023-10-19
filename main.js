'use strict';

const input = document.querySelector('.input-style');
const article = document.querySelector('.card-signup');
const button = document.querySelector('.btn');
const errorDisplayer = document.querySelector('.error');
const article2 = document.querySelector('.card-signup2');
const placeholder = document.getElementById('placeholderstyle');
console.log(placeholder);
const displayError = function () {
  errorDisplayer.style.opacity = 1;
  input.style.border = '1px solid var(--Tomato)';
};

button.addEventListener('click', function (e) {
  const inputValue = input.value;

  if (!inputValue.includes('@company') || inputValue === '')
    return displayError();

  const html = `
      <article class="card-signup2">
      <div class="card-content2">
        <img src="./assets/images/icon-success.svg" alt="" />
        <div class="card-text2">
          <h1>Thanks for subscribing!</h1>

          <p>
            A confirmation email has been sent to you
            <span class="email">${inputValue}</span>. Plase open it and click the button
            inside to confirm your subscription.
          </p>
        </div>
        <button class="btn btn-thanks">Dismiss message</button>
      </div>
    </article>`;

  document.body.innerHTML = '';
  document.body.insertAdjacentHTML('afterbegin', html);
});

document.body.addEventListener('click', function (e) {
  const handler = e.target;
  if (!handler.classList.contains('btn-thanks')) return;

  if (handler.classList.contains('btn-thanks')) {
    location.reload();
  }
});
