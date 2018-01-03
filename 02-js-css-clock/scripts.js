let setDate = ()=>{
    let secondHand = document.querySelector('.second-hand');
    let minuteHand = document.querySelector('.min-hand');
    let hourHand = document.querySelector('.hour-hand');
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hour = now.getHours();
    let secondDegree = ((seconds/60) * 360)+90;
    let minuteDegree = ((minutes/60) * 360)+90;
    let hourDegree = ((hour/12) * 360)+90;
    secondHand.style.transform =`rotate(${secondDegree}deg)`;
    minuteHand.style.transform =`rotate(${minuteDegree}deg)`;
     hourHand.style.transform =`rotate(${hourDegree}deg)`;
    console.log(minuteDegree);
}

setInterval(setDate, 1000, )