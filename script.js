var date = moment().toDate();
console.log(date);
var datefield = document.querySelector("#currentDay");
var op9Btn = document.querySelector("#btn_9");
var op10Btn = document.querySelector("#btn_10");
var op11Btn = document.querySelector("#btn_11");
var op12Btn = document.querySelector("#btn_12");
var op13Btn = document.querySelector("#btn_13");
var op14Btn = document.querySelector("#btn_14");
var op15Btn = document.querySelector("#btn_15");
var op16Btn = document.querySelector("#btn_16");
var op17Btn = document.querySelector("#btn_17");

const txt9El = document.getElementById("act_9");
const txt10El = document.getElementById("act_10");
const txt11El = document.getElementById("act_11");
const txt12El = document.getElementById("act_12");
const txt13El = document.getElementById("act_13");
const txt14El = document.getElementById("act_14");
const txt15El = document.getElementById("act_15");
const txt16El = document.getElementById("act_16");
const txt17El = document.getElementById("act_17");

const h9Clr = document.getElementById("h9");
const h10Clr = document.getElementById("h10");
const h11Clr = document.getElementById("h11");
const h12Clr = document.getElementById("h12");
const h13Clr = document.getElementById("h13");
const h14Clr = document.getElementById("h14");
const h15Clr = document.getElementById("h15");
const h16Clr = document.getElementById("h16");
const h17Clr = document.getElementById("h17");


function hour(){
    
    const hours = moment();
    return parseInt(hours.format("H"));
    
}


function getMem(){
    if  (localStorage.getItem("txt9")){
         txt9El.innerHTML=  localStorage.getItem("txt9");
    }
    if  (localStorage.getItem("txt10")){
         txt10El.innerHTML=  localStorage.getItem("txt10");
    }
    if  (localStorage.getItem("txt11")){
         txt11El.innerHTML=  localStorage.getItem("txt11");
    }
    if  (localStorage.getItem("txt12")){
         txt12El.innerHTML=  localStorage.getItem("txt12");
    }
    if  (localStorage.getItem("txt13")){
         txt13El.innerHTML=  localStorage.getItem("txt13");
    }
    if  (localStorage.getItem("txt14")){
         txt14El.innerHTML=  localStorage.getItem("txt14");
    }
    if  (localStorage.getItem("txt15")){
         txt15El.innerHTML=  localStorage.getItem("txt15");
    }
    if  (localStorage.getItem("txt16")){
         txt16El.innerHTML=  localStorage.getItem("txt16");
    }
    if  (localStorage.getItem("txt17")){
         txt17El.innerHTML=  localStorage.getItem("txt17");
    }
    
    var hcolor= hour();
    if (hcolor==9){
         h9Clr.className = "rowr";
    }else{
        if (hcolor>9){
            h9Clr.className = "rowg";
        }else{
            h9Clr.className = "rowb";
        }
    }
    
     if (hcolor==10){
         h10Clr.className = "rowr";
    }else{
        if (hcolor>10){
            h10Clr.className = "rowg";
        }else{
            h10Clr.className = "rowb";
        }
    }
    
     if (hcolor==11){
         h11Clr.className = "rowr";
    }else{
        if (hcolor>11){
            h11Clr.className = "rowg";
        }else{
            h11Clr.className = "rowb";
        }
    }
    
      if (hcolor==12){
         h12Clr.className = "rowr";
    }else{
        if (hcolor>12){
            h12Clr.className = "rowg";
        }else{
            h12Clr.className = "rowb";
        }
    }
        if (hcolor==13){
         h13Clr.className = "rowr";
    }else{
        if (hcolor>13){
            h13Clr.className = "rowg";
        }else{
            h13Clr.className = "rowb";
        }
    }
    
        if (hcolor==14){
         h14Clr.className = "rowr";
    }else{
        if (hcolor>14){
            h14Clr.className = "rowg";
        }else{
            h14Clr.className = "rowb";
        }
    }
    
         if (hcolor==15){
         h15Clr.className = "rowr";
    }else{
        if (hcolor>15){
            h15Clr.className = "rowg";
        }else{
            h15Clr.className = "rowb";
        }
    }
    
        if (hcolor==16){
         h16Clr.className = "rowr";
    }else{
        if (hcolor>16){
            h16Clr.className = "rowg";
        }else{
            h16Clr.className = "rowb";
        }
    }

        if (hcolor==17){
         h17Clr.className = "rowr";
    }else{
        if (hcolor>17){
            h17Clr.className = "rowg";
        }else{
            h17Clr.className = "rowb";
        }
    }
}
function op9Rec(){
    localStorage.setItem("txt9", document.querySelector("#act_9").value);
}

function op10Rec(){
    localStorage.setItem("txt10", document.querySelector("#act_10").value);
}

function op11Rec(){
    localStorage.setItem("txt11", document.querySelector("#act_11").value);
}
function op12Rec(){
    localStorage.setItem("txt12", document.querySelector("#act_12").value);
}
function op13Rec(){
    localStorage.setItem("txt13", document.querySelector("#act_13").value);
}
function op14Rec(){
    localStorage.setItem("txt14", document.querySelector("#act_14").value);
}
function op15Rec(){
    localStorage.setItem("txt15", document.querySelector("#act_15").value);
}
function op16Rec(){
    localStorage.setItem("txt16", document.querySelector("#act_16").value);
}
function op17Rec(){
    localStorage.setItem("txt17", document.querySelector("#act_17").value);
}


datefield.textContent = date;
op9Btn.addEventListener("click", op9Rec);
op10Btn.addEventListener("click",op10Rec);
op11Btn.addEventListener("click",op11Rec);
op12Btn.addEventListener("click",op12Rec);
op13Btn.addEventListener("click",op13Rec);
op14Btn.addEventListener("click",op14Rec);
op15Btn.addEventListener("click",op15Rec);
op16Btn.addEventListener("click",op16Rec);
op17Btn.addEventListener("click",op17Rec);

$('table').DataTable();