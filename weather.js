let temp = document.querySelector('#temp');
let weather = document.querySelector('#weather');
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let wind = document.querySelector('#wind');
let icon = document.querySelector('#icon');

//http 요청
axios.get('https://api.openweathermap.org/data/2.5/find?q=Seoul&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35')
.then(function(response) {
  console.log(response.data);
  // response.data 파싱
  let number_data = response.data.list[0]; // list 인덱스 1까지 있음
  let string_data = response.data.list[0].weather[0];
  console.log(response.data.list[0])

  temp.innerText = number_data.main.temp + "°C"; // degree_data의 main 속성의 temp 속성 값을 가져옴.
  min.innerText = number_data.main.temp_min;
  max.innerText = number_data.main.temp_max;
  wind.innerText = number_data.wind.speed;

  weather.innerText = string_data.main + "," + string_data.description;
  //icon.setAttribute('src', icon_url + string_data.icon + ".png");
})
.catch(function(error) {
  console.log(error);
})
.then(function() {});
