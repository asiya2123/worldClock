// loss angeles
let lossAngeles=document.querySelector("#lossAngeles");
let lossAngelsdate=lossAngeles.querySelector(".date");
let lossAngelsTime=lossAngeles.querySelector(".time");
function lossangeles(){
let lossAngels=moment.tz("America/Los_Angeles");
lossAngelsdate.innerHTML=lossAngels.format("MMMM Do, YYYY");
console.log(lossAngels.format("MMMM Do, YYYY"));
lossAngelsTime.innerHTML=lossAngels.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(lossangeles, 1000);

// paris
let paris=document.querySelector("#paris");
let parisDate=paris.querySelector(".date");
let parisTime=paris.querySelector(".time");
function parisFxn(){
    let parisMoment=moment.tz("Europe/Paris");
    parisDate.innerHTML=parisMoment.format("MMMM Do, YYYY");
    parisTime.innerHTML=parisMoment.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(parisFxn,1000);

// India
let india=document.querySelector("#india");
let indiaDate=india.querySelector(".date");
let indiaTime=india.querySelector(".time");
function indiaFxn(){
    let indiaMoment=moment.tz("Asia/Kolkata");
    indiaDate.innerHTML=indiaMoment.format("MMMM Do, YYYY");
    indiaTime.innerHTML=indiaMoment.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(indiaFxn,1000);