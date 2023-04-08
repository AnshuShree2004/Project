    const btn =document.getElementById('btn')
    const add = document.getElementById('add')
   function random(){
    let val='123456789ABCDEF'
    let cons ='#'
    for(let i=0;i< 6 ;i++ ) {
        cons = cons+val[Math.floor(Math.random()*16)]
    }
    return cons
   }

    function addSome(){
        const div = document.createElement('div')
        div.innerText='welcome'
        div.style.cssText = 'background-color :yellow ; font-weight:700 ; font-size:45px ;text-align :center';
       add.appendChild(div)
    }
    btn.addEventListener('dblclick',addSome)
    