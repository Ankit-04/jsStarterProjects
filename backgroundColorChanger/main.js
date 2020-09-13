var current = 0;
function changeColor(){
    const colors = ['red', 'blue', 'green', 'orange', 'yellow','purple']; 
    current += Math.floor(Math.random()*(5-1)+1);
    console.log(current%6);
    document.body.style.background = colors[current%6];
    
}