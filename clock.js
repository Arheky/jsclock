let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let _name = prompt("İsminizi giriniz");
let myName = document.querySelector("#myName");

if(_name){
    myName.innerHTML = `${_name} `
}else{
    alert("Bir isim giriniz.")
    location.reload();
}

function clock(){
    let dateTime= new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML= `${hrs}: ${min}: ${sec}  ${day}`
}
    
    setInterval(clock, 1000);