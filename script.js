const menuBtn = document.getElementById('menu-icon')
const searchBtn = document.getElementById('search-icon')
const dropdownMenu = document.getElementById('dropdown-menu')
const searchBar = document.getElementById('search-bar')
const loginBtn = document.getElementById('login-button')
const signUpBtn = document.getElementById('signup-button')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')

menuBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('visible')
  menuBtn.classList.toggle('open-menu')
  searchBar.classList.remove('visible')
})

searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('visible')
  dropdownMenu.classList.remove('visible')
})

loginBtn.addEventListener('click', (event) => {
  event.preventDefault() // you can't actually log in, no need for the page to refresh

  if (!emailInput.value || !passwordInput.value) {
    alert('Please provide your email and password') // placeholder, will implement a better solution
  }
})