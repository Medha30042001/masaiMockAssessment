function displayCar(){
    console.log('This is a car');
}
function displayTruck(){
    console.log('This is a truck');
}
function displayBike(){
    console.log('This is a bike');
}

function vehicleInfo(vehicleCategory, callbackFn){
    console.log(`${vehicleCategory}`);
    callbackFn();
}

vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);
