var btnTranslate = document.querySelector("#btn-translate"); 
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



function clickHandler(){
outputDiv.innerText = " Bada Bing Bada Boom " + txtInput.value;
};

btnTranslate.addEventListener("click",clickHandler)
