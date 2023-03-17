function convertToMilitary(hour){
    const splitedHour = hour.split(':')
    let convertedHour = null
    function removeLettersFromTime(){
        splitedHour[2] = splitedHour[2].substring(0,2)
    }
    if(splitedHour[2].includes('AM')){
        if(splitedHour[0] === '12'){
            splitedHour[0] = '00'
        }
        removeLettersFromTime()
        convertedHour = splitedHour.join(':')
    }else{
        removeLettersFromTime()
        if(splitedHour[0] === '12'){
            splitedHour[0] = '12'
        }else{
            splitedHour[0] =  parseInt(splitedHour[0]) + 12
        }
       convertedHour = splitedHour.join(':')
    }
     return convertedHour
}

console.log(convertToMilitary('12:05:45AM'))