const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const timestamps = [];

timestamps.unshift(getTimestamp());

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
  return keys[getRandomNumber(0, keys.length-1)]
}

function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  key.classList.add("selected");
  let start = Date.now()
}

function getTimestamp() {
  return Math.floor(Date.now() / 1000)
}

document.addEventListener("keyup", event => {
  // console.log(event.key);
  const keyPressed = event.key.toUpperCase();

  console.log(keyPressed);
  const highlightedKey = document.querySelector(".selected");

  if(!["SHIFT", "ENTER"].includes(keyPressed)) {
    const keyElement = document.getElementById(keyPressed);
    keyElement.classList.add("hit")
    keyElement.addEventListener('animationend', () => {
      keyElement.classList.remove("hit")
    })
  }
  else
  {
    const keyElements = document.querySelectorAll("#"+keyPressed);
    for(let keyElement of keyElements)
    {    
      keyElement.classList.add("hit")
      keyElement.addEventListener('animationend', () => {
        keyElement.classList.remove("hit")
      })
    }
  }

  if (keyPressed === highlightedKey.innerHTML) {
    timestamps.unshift(getTimestamp());
    const elapsedTime = timestamps[0] - timestamps[1];
    console.log(`Character per minute ${60/elapsedTime}`)
    highlightedKey.classList.remove("selected");
    targetRandomKey();
  } 
  else{
    const body = document.getElementsByTagName("body")[0]
    console.log(body);
    body.classList.add("wrong");
    body.addEventListener('animationend', () => {
      body.classList.remove("wrong");
    })
  }
})

targetRandomKey();