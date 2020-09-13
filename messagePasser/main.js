function submit(){
    var message=document.getElementById("mess").value;
    document.getElementById("last").innerHTML = message;
    document.getElementById("mess").value = "";
}