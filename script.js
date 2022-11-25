'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal();
});
