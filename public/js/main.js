console.log("weather page");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const cityName = document.getElementById("cityName");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const datahide = document.querySelector(".middle_layer");
console.log(datahide);
// console.log(cityName);
// console.log(city_name);
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerHTML = "Please Enter The City Name Before Search";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263
      `;
      const response = await fetch(url);
      console.log(response);
      var data = await response.json();
      console.log(data);
      const arrData = [data];
      console.log(arrData);
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;
      const tempMood = arrData[0].weather[0].main;
      console.log(tempMood);
      // temp_status.innerText = arrData[0].weather[0].main
      // console.log(arrData[0].weather[0].main)

      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: yellow;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else if (tempMood == "Night") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-night' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color:yellow;'></i>";
      }
      datahide.classList.remove("data_hide");
    } catch (err) {
      console.log(err);
      city_name.innerHTML = "Please Enter Correct City Name";
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
setInterval(() => {
  let cityName = document.getElementById("cityName");
  if(cityName.value === '' ){
    let datahide = document.querySelector('.middle_layer');
    datahide.classList.add("data_hide");
    let city_name = document.getElementById("city_name");
    city_name.innerText = 'Get Output Here'

  }
 
},1000)
