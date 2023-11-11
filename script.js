const cities = [];
let htmlElement;

const URL =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
fetch(URL)
  .then((data) => {
    return data.json();
  })
  .then((finaldata) => {
    cities.push(...finaldata);
  });

function matchingExpression(cities, searchItem) {
  return cities.filter((place) => {
    const regex = new RegExp(searchItem, "gi");
    return place.city.match(regex)||place.state.match(regex);
  });
}

document.querySelector(".search").addEventListener("change", (e) => {
  matchingExpression(cities, e.target.value);
});
let arr=[];
document.querySelector(".search").addEventListener("keyup", (e) => {
  arr=matchingExpression(cities, e.target.value);
 document.querySelectorAll('li').forEach(element=>{
    element.remove();
 })
 let html="";
 if(arr) {
    htmlElement="";
  arr.forEach(element=>{
    html= createHtml(element);
   })
}
  document.querySelector('.suggestions').innerHTML=html;
});


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
 }

function createHtml(arr){
   return htmlElement+=`<li>${arr.city},${arr.state} <span>${numberWithCommas(arr.population)}</span></li> `
}



