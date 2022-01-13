const nicotineQuantity = document.querySelector(".nicotineQuantity")
const powerOfNicotine = document.querySelector(".powerOfNicotine")
const nicotineFreeQuantity = document.querySelector(".nicotineFreeQuantity")
const result = document.querySelector(".result")

let n = 0
let p = 0
let nf = 0

const calculete = ()=>{

    if(nicotineQuantity.value>0 && powerOfNicotine.value>0 && nicotineFreeQuantity.value>0){
        const capacity = n+nf
        const power = (p*(n/10))/(capacity/10)
        result.innerHTML = `Otrzymasz płyn o pojemności ${capacity}ml, o mocy ${power.toFixed(2)}mg/ml nikotyny`
    }else result.innerHTML = ""
  
}

const handleNicotineQuantity=(e)=>{
    n = e.target.value*1
    calculete()
}
const handlePowerOfNicotine=(e)=>{
    p = e.target.value*1
    calculete()
}
const handleNicotineFreeQuantity=(e)=>{
    nf = e.target.value*1
    calculete()
}

nicotineQuantity.addEventListener('input', handleNicotineQuantity)
powerOfNicotine.addEventListener('input', handlePowerOfNicotine)
nicotineFreeQuantity.addEventListener('input', handleNicotineFreeQuantity)