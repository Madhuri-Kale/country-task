let cl = console.log;



let countryData = document.getElementById("countryData");
let findCountry = document.getElementById("findCountry");
let nameBtn = document.getElementById("nameBtn");
let nameBtnAs = document.getElementById("nameBtnAs");
let nameBtnDs = document.getElementById("nameBtnDs");
let capitalBtn = document.getElementById("capitalBtn");
let capitalBtnAs = document.getElementById("capitalBtnAs");
let capitalBtnDs = document.getElementById("capitalBtnDs");
let populationBtn = document.getElementById("populationBtn");
let populationBtAs = document.getElementById("populationBtnAs");
let populationBtnDs = document.getElementById("populationBtnDs");
let populationGraph = document.getElementById("populationGraph");
let myChart = document.getElementById("myChart");



function templating(arr){
    let result = "";

    arr.forEach(function(country){
        result += `<div class="col-lg-3 col-md-6 col-xs-12">
                        <div class="card mb-3">
                        <figure class="cntryCard">
                            <img src="${country.flag}" class="img-fluid" alt="">
                            <figcaption class="cntryDetails m-4">
                                <h5 class="text-center">${country.name}</h5>
                                <p>
                                    <strong>Capital</strong>: ${country.capital} <br>
                                    <strong>Language</strong>: ${country.languages} <br>
                                    <strong>Population</strong>: ${country.population}
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    </div>`
    })
    countryData.innerHTML = result;
}

templating(countries);


const onsearch = (eve => {
    cl(eve.target.value)
    let searchedCountry = countries.filter(country => {
        return(country.name.toLowerCase().trim().includes(eve.target.value) || country.capital.toLowerCase().trim().includes(eve.target.value) || country.languages.toString().toLowerCase().trim().includes(eve.target.value))
    })
    templating(searchedCountry);
    
})

const onNameClick = () => {
    
    countries.sort(function (a, b) {
      return (a.name < b.name) ? -1 : 1
    })
    templating(countries);
    nameBtn.classList.add("d-none")
    nameBtnDs.classList.remove("d-none")
    nameBtnAs.classList.add("d-none")

}
const onNameClickDs = () => {
    countries.sort(function (a, b) {
      return (a.name > b.name) ? -1 : 1
    })
    templating(countries);
    nameBtnDs.classList.add("d-none")
    nameBtnAs.classList.remove("d-none")
}
const onCapitalClick = () => {
    
    countries.sort(function (a, b) {
      return (a.capital < b.capital) ? -1 : 1
    })
    templating(countries);
    capitalBtn.classList.add("d-none")
    capitalBtnDs.classList.remove("d-none")
    capitalBtnAs.classList.add("d-none")
}
const onCapitalClickDs = () => {
    
    countries.sort(function (a, b) {
      return (a.capital > b.capital) ? -1 : 1
    })
    templating(countries);
    capitalBtnDs.classList.add("d-none")
    capitalBtnAs.classList.remove("d-none")
}

const onPopulationClick = () => {

    countries.sort(function (a, b) {
      return (a.population < b.population) ? -1 : 1
    })
    templating(countries);
    populationBtn.classList.add("d-none")
    populationBtnDs.classList.remove("d-none")
    populationBtnAs.classList.add("d-none")
}

const onPopulationClickDs = () => {

    countries.sort(function (a, b) {
      return (a.population > b.population) ? -1 : 1
    })
    templating(countries);
    populationBtnDs.classList.add("d-none")
    populationBtnAs.classList.remove("d-none")
}

const onGraphClick = (eve => {
    eve.preventDefault();
    let Names=[];
    let Population=[];
    let barColors = [];
    countries.sort(function (a, b) {
        return (a.population > b.population) ? -1 : 1
    })
    countries.forEach((arr, i) => {
        if(i < 10){
        Names.push(arr.name);
        Population.push(arr.population);
        barColors.push("orange");
        }
    })

    new Chart("myChart", {
        type: "horizontalBar",
        data: {
            labels: Names,
            datasets: [{
            backgroundColor: barColors,
            data: Population
            }]
        },
        options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Top 10 most populated countries"
            }
          }
    });

    myChart.scrollIntoView();
})

findCountry.addEventListener("keydown", onsearch);
nameBtn.addEventListener("click", onNameClick);
nameBtnDs.addEventListener("click", onNameClickDs);
nameBtnAs.addEventListener("click", onNameClick);
capitalBtn.addEventListener("click", onCapitalClick);
capitalBtnDs.addEventListener("click", onCapitalClickDs);
capitalBtnAs.addEventListener("click", onCapitalClick);
populationBtn.addEventListener("click", onPopulationClick);
populationBtnDs.addEventListener("click", onPopulationClickDs);
populationBtnAs.addEventListener("click", onPopulationClick);
populationGraph.addEventListener("click", onGraphClick);




