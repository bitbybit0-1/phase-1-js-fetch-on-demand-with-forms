const init = () => {
const inputForm = document.querySelector('form');
inputForm.addEventListener('submit',(event)=>{
event.preventDefault();
const input=document.querySelector(event.target.children[1].value)

fetch(`${input}`)
.then(response=>response.json())
.then(data=>{
    console.log(data)
})
})
   
}

document.addEventListener('DOMContentLoaded', init);