const monk = document.querySelector('.monk');

const toot1 = new Audio('./assets/sounds/toot1.mp3'),
toot2 = new Audio('./assets/sounds/toot2.mp3'),
toot3 = new Audio('./assets/sounds/toot3.mp3'),
toot4 = new Audio('./assets/sounds/toot4.mp3'),
toot5 = new Audio('./assets/sounds/toot5.mp3'),
toot6 = new Audio('./assets/sounds/toot6.mp3'),
toot7 = new Audio('./assets/sounds/toot7.mp3'),
toot8 = new Audio('./assets/sounds/toot8.mp3'),
toot9 = new Audio('./assets/sounds/toot9.mp3'),
toot10 = new Audio('./assets/sounds/toot10.mp3');

const tootAccident = new Audio('./assets/sounds/toot_accident1.mp3');
const tootArray = [toot1, toot2, toot3, toot4, toot5, toot6, toot7, toot8, toot9, toot10];

const ambiance = new Audio('./assets/sounds/beautiful-birds-singing.mp3');

let count = 0;

function playSound() {
  let tootIndex = Math.floor(Math.random() * 10);
  let countMax = Math.floor(Math.random() * 10) + 3
  let randomToot = tootArray[tootIndex];

  ambiance.play()
  ambiance.loop = true;
  ambiance.volume = .5;

  if (count < countMax) {
    if (tootAccident.paused) {
      count++;
      monk.classList.add('tooting');
      randomToot.play();
      randomToot.onended = function() {
        monk.classList.remove('tooting');
      };
    }

  } else {
    count = 0;
    ambiance.pause();
    monk.classList.add('accident');
    tootAccident.play();
    tootAccident.onended = function() {
      monk.classList.remove('accident')
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  monk.addEventListener('click', playSound)
})