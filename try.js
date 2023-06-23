//Variable declarations
 const present_time = document.querySelector("h1"),
 content = document.querySelector(".content"),
 drop_down = document.querySelectorAll("select"),
 alarmBtn = document.querySelector("button");
 let alarm_time,
  alarm_on,
  sound = new Audio('./project/elctro.mp3');
 //loop for creating values in select option
for (let i = 12; i > 0; i--) {
    if (i < 10) {
        i = `0${i}`;
    }
       //true == updated value, false == existing value
    let option = `<option value="${i}">${i}</option>`; //using string literal to change value
    drop_down[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
//creating option values
for (let i = 59; i >= 0; i--) {
    if (i < 10) {
        i = `0${i}`;
    }
    let option = `<option value="${i}">${i}</option>`; //using string literal to change value
    drop_down[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let zone;
      if (i == 1) {
      zone = "AM";
      } else {
     zone = "PM";
    }
    let option = `<option value="${zone}">${zone}</option>`;//using string literal to change value
    drop_down[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
//Setting computer time to our clock
setInterval(() => {
    let date = new Date(), //accessing time and date to match our system time.
    hrs = date.getHours(),
    mntes = date.getMinutes(),
    sec = date.getSeconds(),
    timeZone = "AM";
    if(hrs >= 12) {
        hrs = hrs - 12; //to set hrs according to 12 hour clock
        timeZone = "PM";
    }
    if (hrs === 0) {
        hrs = 12;
    } else {
        hrs = hrs;
    }
    if (hrs < 10) {
        hrs = "0" + hrs; //to set hours counting from 01,02...
    } else {
        hrs = hrs;
    }
    if (mntes < 10) {
        mntes = "0" + mntes; //to set minutes counting from 01,02..
    } else {
        mntes = mntes;
    }
    if (sec < 10) {
        sec = "0" + sec; //to set seconds counting from 01,02..
    } else {
        sec = sec;
    }
    present_time.innerText = `${hrs}:${mntes}:${sec} ${timeZone}`;

    if (alarm_time === `${hrs}:${mntes} ${timeZone}`) {
        sound.play();
        console.log("alarm ringing")
        sound.loop = true;
    }
});
//setting alarm and also disabling if no needed
function enable() {
    //enabling alarm
    if (alarm_on) {
        alarm_time = "";
        sound.pause();
        content.classList.remove("disable");
        alarmBtn.innerText = "Set Alarm";
        return alarm_on = false;
    }
  //disabling alarm
    let time = `${drop_down[0].value}:${drop_down[1].value} ${drop_down[2].value}`;
    //to avoid invalid inputs
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Enter valid time");
    }
    alarm_time = time;
    alarm_on = true;
    content.classList.add("disable");
    alarmBtn.innerText = "Clear Alarm";
}
alarmBtn.addEventListener("click", enable);