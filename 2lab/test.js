const app = document.querySelector('.app')



const comm = document.querySelector('#comInp')
comm.style.backgroundColor = 'white'
comm.onchange = () => {

const title = document.createElement('div')
title.innerHTML = comm.value
comm.value = ''
title.style.color = 'red'
title.onclick = () => {
    app.removeChild(title)
}
app.appendChild(title)

}

const dark = document.querySelector('#black')
const text = document.querySelectorAll('.text')
let isBlack = true
dark.onclick = () =>{
    isBlack = !isBlack
    if (isBlack){
    document.body.style.backgroundColor = 'black'
    for (let i = 0; i < text.length; i++){
        text[i].style.color = 'white'
    }
    }
    else{
        document.body.style.backgroundColor = 'white'
        for (let i = 0; i < text.length; i++){
            text[i].style.color = 'black'
        }    }
}



console.log('title', title)