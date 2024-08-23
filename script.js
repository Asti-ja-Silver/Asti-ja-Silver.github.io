document.addEventListener('DOMContentLoaded', function() {
    /* document.getElementById('rsvpButton').addEventListener('click', function() {
        window.location.href = 'https://forms.gle/aq9u7r7q79WjRCY47';
    }); */

    function adjustTextContentHeight() {
        var backgroundPhotoHeight = document.querySelector('.background-photo').offsetHeight;
        var textContent = document.querySelector('.text-content');
        if (window.innerWidth > 1150) {
            // Adjust the height only if the viewport width is greater than 1150px
            textContent.style.height = (backgroundPhotoHeight - 80) + 'px';
        } else {
            // Reset the height if the viewport width is 1150px or less
            textContent.style.height = 'auto';
        }
        textContent.scrollTop = 0;
    }
    // Call the function initially
    adjustTextContentHeight();

    // Also call the function whenever the window is resized
    window.onresize = function() {
        adjustTextContentHeight();
    };

// countdown
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const targetTime = new Date("August 24, 2024 00:27:00 GMT+0300").getTime();
// console.log(targetTime);

function countdown(){
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;
    
    if (difference <= 0) {
        // When countdown finishes
        day.innerText = '';
        hour.innerText = '';
        minute.innerText = '';
        second.innerText = '';

        document.querySelector('.countdown').innerHTML = "<div class='end-message'><h2>Jeeee! Hr ja Pr. Butlers!</h2></div>";
            return;
    }

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