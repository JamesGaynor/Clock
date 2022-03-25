// tt
const hand = document.querySelector(".hand");
const minutesHand = document.querySelector(".minute-hand");
// set up interval of 1 second
//increment a count value
//change rotation of 90 degrees to 6
//   let count = 0
// setInterval(function(){
//     console.log(hand.style.transform)
//     if (count >=360) {count = 0}
//     hand.style.transform = `rotate(${count+=6}deg)`;
// }, 1000)

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  // console.log(seconds);
  const secondsDegrees = (seconds / 60) * 360;
  hand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minsDegrees}deg)`;
}

setInterval(setDate, 1000);
