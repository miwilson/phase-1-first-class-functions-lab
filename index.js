// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 4)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let fare = 5
function createFareMultiplier(){
    return function(){
        return (fare * fare) 
    }
}

function fareDoubler(){
    return (fare * 2) * 2
}

let price = 4
function fareTripler(){
    return (price * 3) * 3
}


const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) =>{
    return returnFirstTwoDrivers(arrayOfDrivers);
}