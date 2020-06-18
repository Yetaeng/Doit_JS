var itemList = [];
var addBtn = document.querySelector("#add");
//addEventListener() 함수를 사용해 addBtn에 click 이벤트가 발생했을 때 처리할 함수를 연결
addBtn.addEventListener("click", addList); //addBtn.on-click = addList;

function addList() {
    var item = document.querySelector("#item").value;
    if (item != null) {
        itemList.push(item);
        document.querySelector("#item").value = ""; // 지움
        document.querySelector("#item").focus();
    }
    showList();
}

function showList() {
    var list = "<ul>";
    for (var i=0; i<itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</spna></li>";
    }
    list += "</ul>";

    document.querySelector("#itemList").innerHTML = list;

    var remove = document.querySelectorAll(".close"); // close는 클래스 명이므로 . 쓰는것 주의!!
    for (var i=0; i<remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    var id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList(); // 다시 선언해주지 않으면, 삭제해도 항목이 그대로 남아있음
}