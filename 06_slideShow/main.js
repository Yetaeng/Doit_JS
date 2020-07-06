let images = document.querySelectorAll("img");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
var index = 0;

showSlide(index);
prev.onclick = prevSlide;
next.onclick = nextSlide;

// 모든 이미지를 감춘 후 인덱스가 n인 이미지만 화면에 표시
function showSlide(n) {
    for(var i=0; i<images.length; i++) {
        images[i].style.display = "none";
    }
    images[n].style.display = "block";
}

function prevSlide() {
    if (index>0) { // 첫 번째 이미지가 아닐 때
        index -= 1; // 이전 이미지로 이동
    }
    else { // 첫 번째 이미지 일 때
        index = images.length -1; // 마지막 이미지로 이동
    }
    showSlide(index);
}

function nextSlide() {
    if (index<images.length-1) { // 마지막 이미지가 아닐 때
        index += 1; // 다음 이미지로 이동
    }
    else { // 마지막 이미지 일 때
        index = 0; // 첫 번째 이미지로 이동
    }
    showSlide(index);
}