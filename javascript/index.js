

let value = 20

function onClick(){
   
    value = document.getElementById("eeditable").value 

    //Meter/Feet Conversion
    
    eMeter.textContent = value + " Meter"
    eFeet.textContent = (value*3.28).toFixed(2) + " Feet"
    rMeter.textContent = (value/3.28).toFixed(2) + " Meter"
    rFeet.textContent = value + " Feet"

    //Liters/Gallons Conversion
    
    eLiters.textContent = value + " Liters"
    eGallons.textContent = (value/4.546).toFixed(2) + " Gallons"
    rLiters.textContent = (value*4.546).toFixed(2) + " Liters"
    rGallons.textContent = value + " Gallons"

    //Kilograms/Pounds Conversion

    eKilograms.textContent = value + " Kilograms"
    ePounds.textContent = (value*2.204).toFixed(2) + " Pounds"
    rKilograms.textContent = (value/2.204).toFixed(2) + " Kilograms"
    rPounds.textContent = value + " Pounds"


    
  
    
}

