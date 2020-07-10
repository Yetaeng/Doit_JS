var mapOptions = {
    zoom: 4,
    center: new naver.maps.LatLng(37.3614483, 127.1114883)
};

var map = new naver.maps.Map('map', mapOptions);

naver.maps.Event.addListener(map, 'click', function(e) {
    console.log(e); //지도를 클릭했을 때 해당 위치를 console.log 메서드로 출력
});

//리스너를 등록하면 MapEventListener 객체를 받는다. 이는 나중에 등록된 리스너를 제거할 때 사용함!
MapEventListener = {
    eventName: String,
    listener: Function,
    listenerId: String,
    target:Object
}

var mapOptions = {
    zoom: 4,
    center: new naver.maps.LatLng(37.3614483, 127.1114883)
};

var map = new naver.maps.Map('map', mapOptions);

//Map 객체는 click 이벤트 등 몇 가지 이벤트에 대해 PointerEvent 객체의 인수를 전달하므로 여기서 marker 라는 객체가 coord를 사용할 수 있는 것이다.
var listener = naver.maps.Event.addListener(map, 'click', function(e) {
    var marker = new naver.maps.Marker({
        position: e.coord,//coord는 이벤트가 발생한 위치의 지도 좌표를 가져오는 PointerEvent 객체의 속성
        map: map
    });
});