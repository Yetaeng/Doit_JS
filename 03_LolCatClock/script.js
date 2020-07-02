/*
1. 현재 시간
2. 기상 시간
3. 점심 시간
4. 낮잠 시간
5. 해당 시간이 되면 이미지가 바뀜
6. 파티타임 버튼 누르면 이미지가 바뀌면서 버튼 내 글자도 파티오버로 바뀜
이미지내 글자도 굿 애프터눈 에서 렛츠 파티로 바뀜
*/

var wakeuptime = 8;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// 페이지에서 현재 시간을 보여주는 함수
let showCurrentTime = function() {
    // display the string on the webpage
    let clock = document.getElementById('clock');
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    
    // Set hours
    const ampm = hours >= noon ? 'PM' : 'AM';
    /*
    let meridian = "AM";
	  if (hours >= noon)
	  {
		  meridian = "PM";
      }
    */
    
    if (hours > noon) { // 12시간 형식으로 바꿔주기
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    let totalClock = hours + ":" + minutes + ":" + seconds + ampm + "!";
    clock.innerText = totalClock;
} 
// showCurrentTime(); 이렇게만 만들고 함수를 실행시키면 웹사이트에서 시간이 바뀌는게 동적으로 보이지 않음. 새로고침해줘야 시간이 바뀜


// 현재 시간이 증가함에 따라 메세지와 사진이 바뀜
let updateClock = function() {
    let time = new Date().getHours(); // 사진을 바꾸기 위한 기준 시간
    let messageText;
    let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg"; 
    // 그냥 변수명만 선언해줘도 되지 않나?
    //let image;

    //let lolcatImageJS = document.getElementById('lolcatImage');
    let timeEventJS = document.getElementById("timeEvent"); // 이미지 위의 바뀌는 문구

    if (time == partytime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
      messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText = "Wake up!";
    }
    else if (time == lunchtime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "Sleep tight!";
    }
    else if (time < noon) {
      image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
      messageText = "Good morning!";
    }
    else if (time >= evening) {
      image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
      messageText = "Good evening!";
    }
    else {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
      messageText = "Good afternoon!";
    }
      //console.log(messageText); 
      lolcatImage.src = image; 
      // lolcatImageJS.src = image;로 안하고 왜 lolcatImage.src로 함? => html 코드를 보면 id가 lolcatImage인 img태그가 있다. 이 태그의 src속성을 바로 가져온 것.
      // 아니 그럼 왜 lolcatImageJS를 선언해줌?
      timeEventJS.innerText = messageText;

      showCurrentTime();
}
updateClock();


// 시간이 1초씩 증가
let oneSecond = 1000;
setInterval(updateClock, oneSecond);


// 파티 타임 버튼을 동작시킴
var partyButton = document.getElementById('partyTimeButton');

let partyEvent = function() {
    if (partytime < 0) {
      partytime = new Date().getHours(); // 이걸 위에 선언하지 않고, 여기에 넣는 이유 다시 생각해보기
      partyTimeButton.innerText = "Party Over!"
      partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else {
      partytime = -1;
      partyTimeButton.innerText = "Party Time!";
      partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();


// 사용자가 설정한 낮잠 시간으로 값 넘겨받기
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

let wakeUpEvent = function() {
    wakeuptime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// 사용자가 설정한 점심 시간으로 값 넘겨받기
var lunchTimeSelector = document.getElementById('lunchTimeSelector');

let lunchEvent = function() {
  lunchtime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);


// 사용자가 설정한 낮잠 시간으로 값 넘겨받기
var napTimeSelector = document.getElementById('napTimeSelector');

let napEvent = function() {
  naptime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napEvent);