var numbercheck = true; // 아무 것도 입력받지 않으므로 false로 초기화

// 식 뒤에 내가 누른 버튼의 숫자나 기호를 추가
function add(char) {
    let display = document.getElementById('display');

    if (numbercheck == false) { // 이전에 연산자를 입력했다면
        if (isNaN(char) == true) { // 근데 또 연산자를 입력했다면
            alert("숫자를 입력하세요.")
        }
        else { // 근데 연산자가 아니라면
            display.value += char;  // input 태그의 값 뒤에 char 문자를 추가해 주는 역할
        }
    }
    else { // 이전에 숫자를 입력했다면
        display.value += char; 
    }

    // 다음 입력을 위해 이번 입력에 숫자가 눌렸는지 연산자가 눌렸는지 설정하기 위함
    if(isNaN(char) == true) { // "만약 숫자가 아닌게 참이라면" = "연산자를 눌렀다면"
        numbercheck = false; // numberClicked를 false로 설정한다.
    } 
    else {
        numbercheck = true; // numberClicked를 true로 설정한다.
    }
}

// 계산 하기
function calculate(char) {
    let display = document.getElementById('display');
    let result = eval(display.value); // eval()는 식이 아닌 문자열이 들어오면 오류 발생
    document.getElementById('result').value = result;
}

// 초기화하기
function reset(char) {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}

/*
사용자가 숫자나 연산자 버튼을 누르면, add함수가 호출되는데
이때 사용자가 누른 값이 char(매개변수)에 들어간다.

char의 값이 숫자라면, numbercheck를 true로 바꾸고, 숫자가 아니라면 false로 바꾼다.
그리고 그 다음 입력을 받을 때, numberClicked가 false인데도 (이전에 연산자를 눌렀는데도) 또 다시 연산자를 입력하면, 입력이 안되게 설정한다.
isNaN을 이용해 숫자가 아니면 true를 반환하는 것을 이용한다.
*/