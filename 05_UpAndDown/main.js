let count = 0;
let randomNumber = Math.floor(Math.random()*100) + 1;

let display = document.getElementById('display');
let counter = document.getElementById('counter');

// 키보드의 키를 눌렀을 때 keypress라는 이벤트가 발생함. 즉, 텍스트 필드에서 어떤 키를 눌렀을 때
document.querySelector('#try').onkeypress = function(e) {
    if (e.keycode == 13 || e.which == 13) { //파이어폭스의 경우 keypress 이벤트에서 e.keycode 대신 e.which 속성을 사용해야 키코드 값을 알 수 있음
        finding();
        return false; // keypress 이벤트가 발생했을 때 브라우저가 기본으로 하는 동작을 취소함. 안그러면 엔터누르자마자 다시 로드됨.
    }
}
// 좌변에 적힌 이벤트가 발생했을 때 그 이벤트 동작을 e라는 함수의 인자로 넣는다. 즉 이벤트 e로 표기한 것.
// 그래서 키코드 값을 가져오려면 event.keycode 속성을 가져오면 되는데, 여기서는 e.keycode 값을 가져오면 된다.


function finding() {
    let userNumber = document.getElementById('try').value; // 왜 함수 내부에서 선언해줘야 실행될까?

    if (1 <= userNumber && userNumber <= 100) {
        console.log(randomNumber);

        if (randomNumber > userNumber) {
            display.innerText = "up";
        }
        else if (randomNumber < userNumber) {
            display.innerText = "Down";
        }
        else {
            display.innerText = "맞췄습니다.";
            userNumber = '';
        }
        count++;
    }
    else {
        alert("1과 100 사이의 숫자를 입력하세요.");
    }
    counter.innerText = count + "번째 시도"
}