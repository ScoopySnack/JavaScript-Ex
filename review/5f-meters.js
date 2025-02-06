function convertMeters(meters){
    return{
        centimiters: meters * 100,
        millimiters: meters * 1000
    }
}

function convertCentimiters(cm){
    return{
        meters: cm / 100,
        millimiters: cm * 10
    }
}

function convertMillimiters(mm){
    return{
        meters: mm / 1000,
        centimiters: mm / 10
    }
}

const obj = convertMillimiters(1500)
console.log(obj.meters) // 1.5
console.log(obj.centimiters) // 150