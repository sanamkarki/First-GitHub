// Feature 1
let city = "London";
let baseUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";

//calling axios for homework 5:
function temperature(response) {
  cityTemp = Math.round(response.data.main.temp);

  //replace the temperature with cityTemp:
  let oldTemp = document.querySelector("#degreeValue");
  oldTemp.innerHTML = `${cityTemp}`;
  let searchValue1 = document.querySelector("#search-Id");
  searchValue1;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(temperature);
// insert search value into the city api:

let totalDate = new Date();
let day1 = totalDate.getDay();
let dayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let realDay = dayArray[day1];
console.log(realDay);

let realHours = totalDate.getHours();

let realMinutes = totalDate.getMinutes();

//printing the output to HTML

let output1 = document.querySelector("#card-textId");
output1.innerHTML = `${realDay}, ${realHours}:${realMinutes}`;

//challenge 2:

function searchFunction(event) {
  event.preventDefault();
  let realValue = document.querySelector("#input-Id");

  let h2 = document.querySelector("h2");

  h2.innerHTML = `${realValue.value}`;
  const city2 = realValue.value;
  axios
    .get(`${baseUrl}?q=${city2}&units=metric&appid=${apiKey}`)
    .then(temperature);
}
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", searchFunction);

// window.globalTemp = `${realValue.value}`;

//Challenge 3
function degreeCFunction(event) {
  event.preventDefault();
  let degreeCClick = document.querySelector("#degreeValue");
  degreeCClick.innerHTML = `40`;
}
let degreeCOutput = document.querySelector("#degreeC");
degreeCOutput.addEventListener("click", degreeCFunction);

function degreeFFunction(event) {
  event.preventDefault();
  let degreeFClick = document.querySelector("#degreeValue");
  degreeFClick.innerHTML = `24`;
}
let degreeFOutput = document.querySelector("#degreeF");
degreeFOutput.addEventListener("click", degreeFFunction);
