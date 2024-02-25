document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rsvpButton').addEventListener('click', function() {
        window.location.href = 'https://forms.gle/aq9u7r7q79WjRCY47';
    });


// countdown
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const targetTime = new Date("September 20, 2024").getTime();
// console.log(targetTime);

    // Set initial text content to empty strings
    day.innerText = '';
    hour.innerText = '';
    minute.innerText = '';
    second.innerText = '';

function countdown(){
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;
    // console.log(difference);

    // 1hr = 60 min
    // 1 min = 60 sec 
    // 1 sec = 1000 ms

    let days = Math.floor(difference/(1000*60*60*24));
    let hours = Math.floor(difference%(1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor(difference%(1000*60*60)/(1000*60));
    let seconds = Math.floor(difference%(1000*60)/1000);

    // console.log(`${days} ${hours} ${minutes} ${seconds}`);

    day.innerText = days>9?days:`0${days}`;
    hour.innerText =  hours>9?hours:`0${hours}`;
    minute.innerText =  minutes>9?minutes:`0${minutes}`;
    second.innerText =  seconds>9?seconds:`0${seconds}`;

}

setInterval(countdown,1000);

});