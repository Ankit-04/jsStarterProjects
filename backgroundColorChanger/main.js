var current = 0;
var index = 1;
function changeColor(){
    if(index++ >6){
        index = 1;
    }
    const colors = ['red', 'blue', 'green', 'orange', 'yellow','purple']; 
    current += index%6;
    document.body.style.background = colors[current];
    
}