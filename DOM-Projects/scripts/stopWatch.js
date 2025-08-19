//Variables for button
const getStartButton = document.getElementById('startStopBtn');
const getResetButton = document.getElementById('resetBtn');

//Variable to hold time
let second=0;
let minute=0;
let hour=0;

//Variables to hold timerstatus and timeInterval
let timerStatus='stopped';
let timeInterval='0';

//Function getTime() which is responsible for the time updating/ displaying
function getTime(){
    second++;
    if(second == 60)
    {
        second=0;
        minute++;
    }
    if(minute == 60)
    {
        minute=0;
        hour++;
    }
    if(hour == 1)
    {
        minute=0;
        second=0;
    }

 let displayTime=`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
 let getTimerId=document.getElementById('timer').innerText=displayTime;
}

//Start button click
getStartButton.addEventListener('click', function(){{
    if(timerStatus === 'stopped')
    {
        timeInterval=window.setInterval(getTime,1000) //setting the time
        document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`; //update to pause button
        timerStatus='started' // updating the status to started
    }
    else
    {
        //Pause buton status need to revert it to start button 
         document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-play" id="play"></i>`;
         //clear the interval
         window.clearInterval(timeInterval);
         //update the status to stopped
         timerStatus='stopped';
    }

}});

//Reset button click
getResetButton.addEventListener('click',function(){
    //clear the interval
    window.clearInterval(timeInterval);
    hour=0;
    minute=0;
    second=0;

    //update the timer
    let displayTime=`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
    let getTimerId=document.getElementById('timer').innerText=displayTime;

    //reset the icon
    getStartButton.innerHTML=`<i class="fa-solid fa-play" id="play"></i>`;
})