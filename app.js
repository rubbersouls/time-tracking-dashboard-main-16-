/* BTN */
const btndaily = document.querySelector(".btn-daily");
const btnweekly = document.querySelector(".btn-weekly");
const btnmonthly = document.querySelector(".btn-monthly");

/* Valeur */

var daily = document.querySelectorAll(".daily");
var weekly = document.querySelectorAll(".weekly");
var monthly = document.querySelectorAll(".monthly");


/* Daily */

btndaily.addEventListener("click", () => {

for (var i = 0; i < daily.length; i++) {
    daily[i].classList.add('active');
}

for (var i = 0; i < weekly.length; i++) {
    weekly[i].classList.remove('active');
}

for (var i = 0; i < monthly.length; i++) {
    monthly[i].classList.remove('active');
}

btndaily.classList.add("btn-on");
btnweekly.classList.remove("btn-on");
btnmonthly.classList.remove("btn-on");

//animation

let valueDisplays = document.querySelectorAll(".num");
let interval = 500;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

})

/* Weekly */

btnweekly.addEventListener("click", () => {

for (var i = 0; i < daily.length; i++) {
    daily[i].classList.remove('active');
}

for (var i = 0; i < weekly.length; i++) {
    weekly[i].classList.add('active');
}

for (var i = 0; i < monthly.length; i++) {
    monthly[i].classList.remove('active');
}

btndaily.classList.remove("btn-on");
btnweekly.classList.add("btn-on");
btnmonthly.classList.remove("btn-on");

//animation

let valueDisplays = document.querySelectorAll(".num");
let interval = 500;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

})

/* monthly */

btnmonthly.addEventListener("click", () => {

for (var i = 0; i < daily.length; i++) {
    daily[i].classList.remove('active');
}

for (var i = 0; i < weekly.length; i++) {
    weekly[i].classList.remove('active');
}

for (var i = 0; i < monthly.length; i++) {
    monthly[i].classList.add('active');
}

btndaily.classList.remove("btn-on");
btnweekly.classList.remove("btn-on");
btnmonthly.classList.add("btn-on");

//animation

let valueDisplays = document.querySelectorAll(".num");
let interval = 500;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

})

//start page

let valueDisplays = document.querySelectorAll(".num");
let interval = 500;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});