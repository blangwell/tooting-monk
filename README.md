# Tooting Monk
An immature homage to the Shockwave/Flash browser distractions of the late nineties and early aughts. Inspired in part by [His Holiness the Dalai Lama](https://www.upworthy.com/the-dalai-lama-has-some-very-uplifting-and-wise-words-about-farting)

## Technologies
- HTML5
- CSS3
- Javascript
- Audacity 

## Process
I started the project by gathering the sound assets. I found an excellent sound compilation via Creative Commons, downloaded it, and split it up into individual sound files via Audacity. 

After the sound assets were added, I used Javascript to create new Audio objects for each sound and put the object variables into an array. I wrote the `playSound()` function to index an audio object at random and play the corresponding sound.

```js
function playSound() {
  let tootIndex = Math.floor(Math.random() * 10);
  let randomToot = tootArray[tootIndex];
  randomToot.play();
}
```