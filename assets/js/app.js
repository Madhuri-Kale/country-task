let cl = console.log;

cl(countries);

let countryData = document.getElementById("countryData");

let result = "";

countries.forEach(function(country){
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