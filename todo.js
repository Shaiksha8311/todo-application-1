let button = document.getElementById('button')
let value = document.getElementById('inputvalue')

button.addEventListener('click',()=>{
    if (value.value !=''){
        let container = document.createElement('div')
        container.classList = 'card'
        let heading = document.createElement('h1')
        heading.textContent =  value.value
        let deletebtn = document.createElement('button')
        deletebtn.textContent = 'Delete'
        deletebtn.classList = 'btn'
        container.classList = 'container'
      
        document.body.appendChild(container)
        
        container.appendChild(heading)
        container.appendChild(deletebtn)
        value.value = ''
        deletebtn.addEventListener('click',()=>{
            document.body.removeChild(container)
        })
    }
    else{
        alert("Please Enter Input")
    }

})
