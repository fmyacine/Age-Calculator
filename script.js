let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")

let warning = document.querySelectorAll(".warning")

let resDay = document.getElementById("resDay")
let resMonth = document.getElementById("resMonth")
let resYear = document.getElementById("resYear")

let war1 = document.getElementById("war1")
let war2 = document.getElementById("war2")
let war3 = document.getElementById("war3")

let h1day = document.getElementById("h1day")
let h1month = document.getElementById("h1month")
let h1year = document.getElementById("h1year")

function calculate(){
    const currentDate = new Date();
    
    const yearnow = currentDate.getFullYear();
    const monthnow = currentDate.getMonth() + 1; 
    const daynow = currentDate.getDate();

    if (yearnow <= year.value && monthnow <= month.value && daynow <= day.value){
        h1day.style.color = 'hsl(0, 100%, 67%)';
        h1month.style.color = 'hsl(0, 100%, 67%)';
        h1year.style.color = 'hsl(0, 100%, 67%)';

        day.style.borderColor = 'hsl(0, 100%, 67%)';
        month.style.borderColor = 'hsl(0, 100%, 67%)';
        year.style.borderColor = 'hsl(0, 100%, 67%)';

        warning.forEach(function(warn){
            warn.style.visibility = 'visible';
        })

    }
    
}