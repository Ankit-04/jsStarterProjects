function changeHex(){
    const hexOptions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var messgae = "Hex Code: ";
    var hexCode = "#"; 
    for(var i = 0; i<6; i++){
        var current = hexOptions[Math.floor((Math.random()*16))];
        hexCode += current;        
    }
    messgae += hexCode;
    document.getElementById("header").innerHTML = messgae;
    document.body.style.background = hexCode;
}