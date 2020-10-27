# Tooting Monk
An immature homage to the Shockwave/Flash browser distractions of the late nineties and early aughts. Inspired in part by [His Holiness the Dalai Lama](https://www.upworthy.com/the-dalai-lama-has-some-very-uplifting-and-wise-words-about-farting)

## Technologies
- HTML5
- CSS3
- Javascript
- Audacity 

## Process
I started the project by gathering the sound assets. I found an excellent sound compilation via Creative Commons, downloaded it, and split it up into individual sound files via Audacity. 

After the sound assets were added, I used Javascript to create new Audio objects for each sound and put the objects' variables into an array. I wrote the `playSound()` function to index an Audio object at random and play the corresponding sound when the monk div is clicked.  

```js
function playSound() {
  let tootIndex = Math.floor(Math.random() * 10);
  let randomToot = tootArray[tootIndex];
  randomToot.play();
}
...

document.addEventListener('DOMContentLoaded', function() {
  monk.addEventListener('click', playSound)
})

```

I then added the `count` variable to keep track of how many times the user has clicked on the monk div. I randomly generate a `countMax` variable each time the `playSound()` function fires. When the `count` number surpasses the value of `countMax`, the `tootAccident` audio is played and `count` is set back to zero. To create the animation, I added code to `playSound()` that temporarily appends a class name to the clicked element.

```js
let count = 0;

function playSound() {
  let tootIndex = Math.floor(Math.random() * 10);
  let countMax = Math.floor(Math.random() * 10) + 5
  let randomToot = tootArray[tootIndex];

  if (count < countMax) {
    monk.classList.add('tooting');
    randomToot.play();
    count++;
    setTimeout(() => {
      monk.classList.remove('tooting');
    }, 500);

  } else {
    monk.classList.add('accident');
    tootAccident.play();
    count = 0;
    setTimeout(() => {
      monk.classList.remove('accident')
    }, 2000);
  }
}
```