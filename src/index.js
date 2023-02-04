/* eslint-disable no-unused-vars */
import YearsUntil from './js/years-since';
import YearsSince from './js/years-since';
import EarthDate from './js/earthDate';
/* eslint-enable no-unused-vars */

//UI Logic

function handleSubmit(event){
  event.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let sinceInput = parseInt(document.getElementById("input1").value);
  let untilInput = parseInt(document.getElementById("input2").value);
  let newAge = new EarthDate(name, age);
  let since = new YearsSince(sinceInput, newAge);
  let until = new YearsUntil(untilInput, newAge);
  let sinceArray = [since.onMercury(), since.onVenus(), since.onMars(), since.onJupiter()];
  let untilArray = [until.onMercury(), until.onVenus(), until.onMars(), until.onJupiter()];
  let currentArray = [newAge.mercuryAge, newAge.venusAge, newAge.marsAge, newAge.jupiterAge];
  let p1 = document.createElement("p")
  p1.append(`${newAge.name}! Your current age is ${newAge.age} on Earth. Here is your age on other planets- ${currentArray.join("<br>")}`);
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
})