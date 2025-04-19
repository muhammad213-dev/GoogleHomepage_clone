let preSearch = document.getElementById('pre-search')
let inputField = document.querySelector('.input-field')
let app = document.getElementById('app')
let icons = document.querySelector('.icons')
let signBtn = document.getElementById('sign-btn')
let overlay = document.getElementById('overlay')
let signinBox = document.getElementById('sign-in-box')
inputField.addEventListener('click', ()=> {
    preSearch.classList.toggle('pre-seach-visible')
})

const displayIcon = () => {
    icons.classList.toggle('display-icons')
}

app.addEventListener('click', displayIcon)

document.addEventListener('click', (e) => {
    if(!inputField.contains(e.target)) {
        preSearch.classList.remove('pre-seach-visible')
    }
    if(!app.contains(e.target)) {
        icons.classList.remove('display-icons')
    }
})

// make the sign-in box visible on the page

signBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    signinBox.style.display = 'grid'
})
overlay.addEventListener('click', ()=> {
    overlay.style.display = 'none';
    signinBox.style.display = 'none';
})
