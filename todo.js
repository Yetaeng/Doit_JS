//New Entry 버튼(할 일 추가)을 클릭하면 아래 함수가 실행됨

function addItem () {
    // ul 요소, input 요소 가져옴
    let list = document.getElementById('todolist');
    let todo = document.getElementById('item');

    // li 요소, 버튼 요소를 생성
    let listItem = document.createElement('li');
    let del = document.createElement('button');

    del.className = 'close';
    del.innerHTML = '&times'; //엔티티 사용 -> 버튼 내부에 X가 표시됨
 
    del.onclick = function (e) {
        // 이벤트가 일어난(삭제 버튼 클릭) li 요소의 부모노드를 찾아서
        // 찾은 ul 요소에서 해당 li요소 삭제
        let pnode = e.target.parentNode;
        list.removeChild(pnode);
    };

    if (!todo.value) {
        alert("할 일을 적어주세요.");
        todo.focus();
        return false; //배열에 추가하지 않음
    }

    listItem.innerText = todo.value;
    listItem.appendChild(del);
    list.appendChild(listItem);

    todo.value = '';
    todo.focus();
}