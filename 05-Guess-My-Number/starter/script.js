'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score >= 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number!';
    } else if (guess > secretNumber) {
      wrongGuess('To high!');
    } else if (guess < secretNumber) {
      wrongGuess('To low!');
    } else {
      correctGuess();
    }
  }
});

function wrongGuess(message) {
  if (score === 1) {
    document.querySelector('.message').textContent = 'Game over!';
  } else {
    document.querySelector('.message').textContent = message;
  }
  score--;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
}

function correctGuess() {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = 'Correct!';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  if (score > Number(document.querySelector('.highscore').textContent)) {
    document.querySelector('.highscore').textContent = score;
  }
}

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = null;
});
