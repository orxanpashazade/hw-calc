//task1
let a = 100
if(a %= 33 > 30){
    if( a %= 14 > 10 ){
        
        if(a %= 5){
            console.log(a)
        }
        else{
            console.log("alinmadi")
        }
    }
}
else{
console.log("alinmadi")
}
//task2
en =  parseInt(prompt("eni daxil et"))
uzunluq = parseInt(prompt("uzunlugu daxil et"))
if(en > 10 && uzunluq > 10){
    alert("duzbucaqlinin sahesi:" + en*uzunluq)
}
else{
    alert("duzbucaqlinin perimetri:" + (en + uzunluq)) // en ve uzunlugu moterizesiz yazanda str kimi goturur?
}

//task3
a =  parseInt(prompt("kvadratin terefini daxil et"))
if (a**=2 > 25){
    alert("sahenin 12ye bolunmesinden alinan qaliq:" +  (a%=12))
}

