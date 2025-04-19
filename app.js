let preSearch = document.getElementById('pre-search')
let inputField = document.querySelector('.input-field')
let app = document.getElementById('app')
let icons = document.querySelector('.icons')
inputField.addEventListener('click', ()=> {
    preSearch.classList.toggle('pre-seach-visible')
})

const displayIcon = () => {
    icons.classList.toggle('display-icons')
}

app.addEventListener('click', displayIcon)