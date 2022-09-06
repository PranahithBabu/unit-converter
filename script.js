let inNum = document.getElementById("inNum")
let btn = document.getElementById("conBtn")
let lp = document.getElementById("lp")
let vp = document.getElementById("vp")
let mp = document.getElementById("mp")

btn.addEventListener("click", function(){
    let val = inNum.value
    if(val>=1 && val<=9999999){
        lp.innerHTML = `${val} meters = ${Number(val*3.281).toFixed(3)} feet | ${val} feet = ${Number(val/3.281).toFixed(3)} meters`
        vp.innerHTML = `${val} liters = ${Number(val*0.264).toFixed(3)} gallons | ${val} gallons = ${Number(val/0.264).toFixed(3)} liters`
        mp.innerHTML = `${val} kilos = ${Number(val*2.204).toFixed(3)} pounds | ${val} pounds = ${Number(val/2.204).toFixed(3)} kilos`
    }else if(val>9999999){
        alert("Given input is out of range. Please enter a number between 1 & 9999999")
    }else{
        alert("Please enter a number between 1 & 9999999")
    }
})
