var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for (var i=0; i<smallPics.length; i++) {
    smallPics[i].onclick = showBig; // smallPics[i].addEventListener("click", showBig);
}

function showBig() {
    var newPic = this.src; //click 이벤트가 발생한 대상의 src 속성 값을 가져옴
    bigPic.setAttribute("src", newPic); // bigPic.src = newPic;
}