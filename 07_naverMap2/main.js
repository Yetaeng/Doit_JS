// 지도 초기화
// var map = new naver.maps.Map('map');

// 지도 초기화 시 MapOptions를 이용하거나(각기 다른 상숫값 사용), setMapTypeId 메서드를 이용해서 지도 유형을 설정함
// MapTypeId 객체는 NAVER 지도 유형의 id 컬렉션
var map1 = new naver.maps.Map('map1', {
    mapTypeId: naver.maps.MapTypeId.NORMAL
});
var map2 = new naver.maps.Map('map2', {
    mapTypeId: naver.maps.MapTypeId.TERRAIN
});
var map3 = new naver.maps.Map('map3', {
    mapTypeId: naver.maps.MapTypeId.SATELLITE
});

var map4 = new naver.maps.Map('map4', {
    mapTypeId: naver.maps.MapTypeId.HYBRID
});

// 지도 이동하기
var jeju = new naver.maps.LatLng(33.3590628, 126.534361);

map1.setCenter(jeju); // 중심 좌표 이동
map1.setZoom(13);     // 줌 레벨 변경

// sw, ne로 설정돼 있는 직사각형의 지리적 영역을 정의
// 만약 내가 서울을 중심으로 하고 싶다하면, 서울을 중심으로 남서쪽, 북동쪽의 어느 좌표를 지정
var seoul = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(37.42829747263545, 126.76620435615891),// sw
    new naver.maps.LatLng(37.7010174173061, 127.18379493229875));// ne

map1.fitBounds(seoul); // 좌표 경계 이동

// 화면의 픽셀 좌표를 이용해 원하는 화면 좌표만큼 이동
//map1.panBy(new naver.maps.Point(10, 10)); // 오른쪽 아래로 10 픽셀 이동