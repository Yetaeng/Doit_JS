// 응용해서 인치 ↔ 센티미터’나, ‘m2 ↔ 평 단위 변환기로도 만들 수 있음

let state = true;
let s_unit = document.querySelector('#s-unit');
let t_unit = document.querySelector('#t-unit');
let s_value = document.querySelector('#s-value');
let t_value = document.querySelector('#t-value');

// 양쪽 화살표를 눌렀을 때 단위 바꾸기
function unit_change() {
    s_value.value = ''
    t_value.value = ''

    // ‘섭씨 → 화씨’로 변환 상태
    if(state) {
        state = false;
        s_unit.innerHTML = "&#8457;"; // 화씨 기호
        t_unit.innerHTML = "&#8451;" // 섭씨 기호
    }

    else {
        state = true;
        s_unit.innerHTML = "&#8451;";
        t_unit.innerHTML = "&#8457;"
    }
}

// 값 변환하기(왼쪽에 값을 입력하면 오른쪽에 변환된 값이 출력)
function converter() {
    if(state) { // 섭씨 -> 화씨 계산
        t_value.value = ((s_value.value * 1.8) + 32).toFixed(2);
        //toFixed( ) 메서드를 사용해서 소수점 이하 몇 번째 자리까지 표시할 것인지 지정. 여기서는 2번째 까지
    }
    else { // 화씨 -> 섭씨 계산
        t_value.value = ((s_value.value - 32) / 1.8).toFixed(2);
    }
}
