const day = document.getElementById("day");
day.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    day.classList.toggle("fa-sun");
    day.classList.toggle("fa-moon");
    if (document.body.classList.contains("darkmode")) {
        updateBackgroundImages('photo-1603366615917-1fa6dad5c4fa.jpg');
    } else {
        updateBackgroundImages('pexels-aleksandar-pasaric-1323712.jpg');
    }
});
let worktitle = document.getElementById('work');
let breaktitle = document.getElementById('break');
let worktime = 25;
let breaktime = 5;
let seconds = "00"
window.onload = () => {
    document.getElementById('mins').innerHTML = worktime;
    document.getElementById('secs').innerHTML = seconds;
    worktitle.classList.add('active');


}
//start timer
function start(){
    //change the icon to reload 
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "none";
    //change the time
    seconds = 59;
    let workmins = worktime - 1;
    let breakmins = breaktime - 1;
    breakcount=0;
    //countdown
    let timerfunction = () =>{
        document.getElementById('mins').innerHTML = workmins;
        document.getElementById('secs').innerHTML = seconds;
        seconds = seconds - 1;
        if(seconds == 0){
            workmins = workmins - 1;
            seconds = 59;
            if(workmins == -1){
                if(breakcount % 2 == 0){
                    //start break
                    workmins = breakmins;
                    breakcount++;
                    worktitle.classList.remove('active');
                    breaktitle.classList.add('active');
                }
                else{
                    workmins = worktime;
                    breakcount++;
                    worktitle.classList.add('active');
                    breaktitle.classList.remove('active');
                }
            }
        }



    }
    //start the ctdwn
    setInterval(timerfunction,1000); //1000 yaani 1s

}

var newsession = document.getElementById("newsesh")
var oldsession = document.getElementById("title");

function changeName(){
     oldsession.textContent = newsession.value;
}
