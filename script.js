const hourHand = document.querySelector('[id="hour-hand"]');
const minuteHand = document.querySelector('[id="min-hand"]');
const secondHand = document.querySelector('[id="sec-hand"]');


setInterval( () => {
    const date = new Date();
    const hour = date.getHours() * 30;
    const minute = date.getMinutes() * 6;
    const second = date.getSeconds() * 6;

    hourHand.style.transform = `rotateZ(${hour + minute / 12}deg)`;
    minuteHand.style.transform = `rotateZ(${minute}deg)`;
    secondHand.style.transform = `rotateZ(${second}deg)`;
}
    , 1)