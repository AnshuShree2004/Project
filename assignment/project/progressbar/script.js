const filled =document.getElementById('.filled')
function update(){
    filled.style.width =`${((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100)}%`
    requestAnimationFrame(update)
}
update()