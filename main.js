// tt
const hand = document.querySelector(".hand");
// set up interval of 1 second
//increment a count value 
//change rotation of 90 degrees to 6 
  let count = 0
setInterval(function(){
    console.log(hand.style.transform)
    if (count >=360) {count = 0}
    hand.style.transform = `rotate(${count+=6}deg)`;
}, 1000)

