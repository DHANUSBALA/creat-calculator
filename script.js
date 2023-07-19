//history function to retrive  and display the users input
function gethistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
//output function to retrive  and display the users input

function getoutput(){
    return document.getElementById("output-value").innerText;
}

function printoutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }else{
        document.getElementById("output-value").innerText=getformattednumber(num);
    }
}
function getformattednumber(num){
    if(num=="-"){
        return"";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
//

function reverseNumberformat(num){
    return Number(num.replace(/./g,""));
}
var operator = document.getElementsByClassName("operator");
for(var i = 0; i<operator.length;i++){
    operator[i].addEventListener("click",function(){
        if(this.id=="clear"){
            
        }    })
}