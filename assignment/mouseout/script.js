const p = document.getElementById('p')
const para =document.getElementById('para')
function colorChange(){
    p.style.backgroundColor = 'yellow'
}
p.addEventListener('mouseout',colorChange)
para.addEventListener('mouseout',() => {
    para.style.backgroundColor ='purple'
})