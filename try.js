//Variable declarations
 const currentTime = document.querySelector("h1");
 const content = document.querySelector(".content");
 const select1 = document.querySelectorAll("select");
 const alarmBtn = document.querySelector("button");
//loop for creating values in select option
let alarm;
let isAlarmSet;
let ringtone = new Audio('./project/elctro.mp3')
for (let i = 12; i > 0; i--) {
    if (i < 10) {
        i = `0${i}`;
    }
       //true == updated value, false == existing value
    let option = `<option value="${i}">${i}</option>`;
    select1[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
//creating option values
for (let i = 59; i >= 0; i--) {
    if (i < 10) {
        i = `0${i}`;
    }
    let option = `<option value="${i}">${i}</option>`;
    select1[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let zone;
      if (i == 1) {
      zone = "AM";
      } else {
     zone = "PM";
    }
    let option = `<option value="${zone}">${zone}</option>`;
    select1[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
//Setting computer time to our clock
setInterval(() => {
    let date = new Date(),
    hrs = date.getHours(),
    mntes = date.getMinutes(),
    sec = date.getSeconds(),
    timeZone = "AM";
    if(hrs >= 12) {
        hrs = hrs - 12;
        timeZone = "PM";
    }
    hrs = hrs == 0 ? hrs = 12 : hrs;
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mntes = mntes < 10 ? "0" + mntes : mntes;
    sec = sec < 10 ? "0" + sec : sec;
    currentTime.innerText = `${hrs}:${mntes}:${sec} ${timeZone}`;

    if (alarm === `${hrs}:${mntes} ${timeZone}`) {
        ringtone.play();
        console.log("alarm ringing")
        ringtone.loop = true;
    }
});
//setting alarm and also disabling if no needed
function setAlarm() {
    //enabling alarm
    if (isAlarmSet) {
        alarm = "";
        ringtone.pause();
        content.classList.remove("disable");
        alarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }
  //disabling alarm
    let time = `${select1[0].value}:${select1[1].value} ${select1[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Enter valid time");
    }
    alarm = time;
    isAlarmSet = true;
    content.classList.add("disable");
    alarmBtn.innerText = "Clear Alarm";
    //if the alarm time is not valid
    
}
alarmBtn.addEventListener("click", setAlarm);