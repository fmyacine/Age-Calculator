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

document.addEventListener("keydown", function(event){
    work(event.key)
})

function work(key){
    switch(key){
        case 'Enter':
            calculate()
            break;
        default:
            break;
    }
}

function calculate(){
    const currentDate = new Date();
    
    const yearnow = currentDate.getFullYear();
    const monthnow = currentDate.getMonth() + 1; 
    const daynow = currentDate.getDate();

    h1day.style.color = 'hsl(0, 1%, 44%)';
    h1month.style.color = 'hsl(0, 1%, 44%)';
    h1year.style.color = 'hsl(0, 1%, 44%)';
    
    day.style.borderColor = '';
    month.style.borderColor = '';
    year.style.borderColor = '';

    warning.forEach(function(warn){
        warn.style.visibility = 'hidden';
        war1.innerHTML ='enter a valid day'
    })

    resDay.innerHTML = '--';
    resMonth.innerHTML = '--';
    resYear.innerHTML = '--';


    let stop = false;
    while(true){
        if (day.value ===''){
            warning[0].innerHTML ='This Field Is Required';
            warning[0].style.visibility= 'visible';
            h1day.style.color= 'hsl(0, 100%, 67%)';
            day.style.borderColor= 'hsl(0, 100%, 67%)';
            stop = true;
        }

        if (month.value ===''){
            warning[1].innerHTML ='This Field Is Required';
            warning[1].style.visibility= 'visible';
            h1month.style.color= 'hsl(0, 100%, 67%)';
            month.style.borderColor= 'hsl(0, 100%, 67%)';
            stop = true;
        }

        if (year.value ===''){
            warning[2].innerHTML ='This Field Is Required';
            warning[2].style.visibility= 'visible';
            h1year.style.color= 'hsl(0, 100%, 67%)';
            year.style.borderColor= 'hsl(0, 100%, 67%)';
            stop = true;
        }
        if(stop) return;
        else break;
        
    }

    if (yearnow <= year.value && monthnow <= month.value && daynow < day.value){
        h1day.style.color = 'hsl(0, 100%, 67%)';
        h1month.style.color = 'hsl(0, 100%, 67%)';
        h1year.style.color = 'hsl(0, 100%, 67%)';

        day.style.borderColor = 'hsl(0, 100%, 67%)';
        month.style.borderColor = 'hsl(0, 100%, 67%)';
        year.style.borderColor = 'hsl(0, 100%, 67%)';

        warning.forEach(function(warn){
            warn.style.visibility = 'visible';
        })
        stop = true;
        return
    }
    
    if(year.value < 0 || isNaN(parseInt(year.value))){
        h1year.style.color= 'hsl(0, 100%, 67%)';

        year.style.borderColor= 'hsl(0, 100%, 67%)';

        warning[2].style.visibility = 'visible';

        stop = true;
    }

    if(month.value<1 || month.value >12 || isNaN(parseInt(month.value))){
        h1month.style.color= 'hsl(0, 100%, 67%)';

        month.style.borderColor= 'hsl(0, 100%, 67%)';

        warning[1].style.visibility = 'visible';

        stop = true;
    }

    const month30 = [4, 6, 9, 11];
    const month31 = [1, 3, 5, 7, 8, 10, 12];


    if(parseInt(day.value) < 1 || parseInt(day.value) > 31 || (parseInt(day.value) > 30 && month30.includes(parseInt(month.value)))  || (parseInt(day.value) >28 && parseInt(month.value) === 2 && !((parseInt(year.value) % 4 === 0 && parseInt(year.value) % 100 !== 0) || (parseInt(year.value) % 400 === 0))) || (parseInt(day.value) > 29 && parseInt(month.value) ===2 && ((parseInt(year.value) % 4 === 0 && parseInt(year.value) % 100 !== 0) || (parseInt(year.value) % 400 === 0))) || isNaN(parseInt(day.value))){
        h1day.style.color= 'hsl(0, 100%, 67%)';
        day.style.borderColor= 'hsl(0, 100%, 67%)';
        warning[0].style.visibility = 'visible';

        stop = true;
    }
    day.blur();
    month.blur();
    year.blur();

    if(stop){
        return;
    }

    let resY = parseInt(yearnow) - parseInt(year.value);
    let resM = parseInt(monthnow) - parseInt(month.value);
    let resD = parseInt(daynow) - parseInt(day.value);

    if(resM < 0){
        resM += 12;
        resY -= 1;
    }

    if(resD < 0){
        if(parseInt((month.value))-1 in month30){
            resD += 30;
        }
        else if(parseInt((month.value))-1 in month31){
            resD += 31;
        }
        else if(parseInt((month.value - 1)) === 2 && !((parseInt(year.value) % 4 === 0 && parseInt(year.value) % 100 !== 0) || (parseInt(year.value) % 400 === 0))){
            resD +=28;
        }
        else if(parseInt((month.value - 1) === 2 && ((parseInt(year.value) % 4 === 0 && parseInt(year.value) % 100 !== 0) || (parseInt(year.value) % 400 === 0)))){
            resD += 29;
        }
        resM--;
    }

    resDay.innerHTML = resD;
    resMonth.innerHTML = resM;
    resYear.innerHTML = resY;
}
