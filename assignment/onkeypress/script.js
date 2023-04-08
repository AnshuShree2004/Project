const generate = document.getElementById('input')
function generateRandom(){
    generate.innerText =Math.floor( Math.random()*16)
    generate.style.backgroundColor= 'red'; 
    generate.style.fontSize='26px';
    generate.style.height ='50px'
    
    generate.style.textAlign = 'center'
}
