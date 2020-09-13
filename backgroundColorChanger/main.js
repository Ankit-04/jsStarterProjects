var current = 0;
var index = 1;
function changeColor(){
    const colors = ['red', 'blue', 'green', 'orange', 'yellow','purple']; 
    index = Math.floor(Math.random()*5)+1
    if((current += index) > 6){
        current = current%6
    }
    console.log(current);
    document.body.style.background = colors[current];
    
}