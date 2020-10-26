const monk = document.getElementById('monk')

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

const tootArray = [toot1, toot2, toot3, toot4, toot5, toot6, toot7, toot8, toot9, toot10]

// let tootIndex = Math.floor(Math.random() * 10)


const tootAccident1 = './assets/toot_accident1.mp3',
tootAccident2 = './assets/toot_accident2.mp3';


function playSound() {
  let tootIndex = Math.floor(Math.random() * 10);
  let randomToot = tootArray[tootIndex];
  randomToot.play();
}

document.addEventListener('DOMContentLoaded', function() {
  monk.addEventListener('click', playSound)
})