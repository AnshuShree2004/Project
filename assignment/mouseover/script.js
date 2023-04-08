const p = document.getElementById('p')
const para =document.getElementById('para')
function colorChange(){
    p.style.backgroundColor = 'yellow'
}
p.addEventListener('mouseover',colorChange)
para.addEventListener('mouseover',() => {
    para.style.backgroundColor ='pink'
})