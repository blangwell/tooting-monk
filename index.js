const monk = document.getElementById('monk');

const toot1 = new Audio('./assets/toot1.mp3'),
toot2 = new Audio('./assets/toot2.mp3'),
toot3 = new Audio('./assets/toot3.mp3'),
toot4 = new Audio('./assets/toot4.mp3'),
toot5 = new Audio('./assets/toot5.mp3'),
toot6 = new Audio('./assets/toot6.mp3'),
toot7 = new Audio('./assets/toot7.mp3'),
toot8 = new Audio('./assets/toot8.mp3'),
toot9 = new Audio('./assets/toot9.mp3'),
toot10 = new Audio('./assets/toot10.mp3');

const tootAccident1 = new Audio('./assets/toot_accident1.mp3'),
tootAccident2 = new Audio('./assets/toot_accident2.mp3');

const tootArray = [toot1, toot2, toot3, toot4, toot5, toot6, toot7, toot8, toot9, toot10];
const accidentArray = [tootAccident1, tootAccident2];

let count = 0;

function playSound() {
  let tootIndex = Math.floor(Math.random() * 10);
  let accidentIndex = Math.floor(Math.random() * 2);
  let countMax = Math.floor(Math.random() * 10) + 5
  
  let randomToot = tootArray[tootIndex];
  let randomAccident = accidentArray[accidentIndex];

  console.log(`count: ${count} countMax: ${countMax} tootIndex: ${tootIndex} accidentIndex: ${accidentIndex}`)

  if (count < countMax) {
    monk.classList.add('tooting');
    randomToot.play();
    count++;
    setTimeout(() => {
      monk.classList.remove('tooting');
    }, 500)

  } else {
    monk.classList.add('accident');
    randomAccident.play();
    count = 0;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  monk.addEventListener('click', playSound)
})