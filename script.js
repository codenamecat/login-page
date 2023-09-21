const menuBtn = document.getElementById('menu-button')
const searchBtn = document.getElementById('search-button')
const dropdownMenu = document.getElementById('dropdown-menu')
const searchBar = document.getElementById('search-bar')
const loginBtn = document.getElementById('login-button')
const signUpBtn = document.getElementById('signup-button')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const menuIcon = document.getElementById('menu-icon')
const searchIcon = document.getElementById('search-icon')

menuBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('visible')
  menuIcon.classList.toggle('open-menu')
  searchBar.classList.remove('visible')
  searchIcon.classList.remove('open-search')
})

searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('visible')
  searchIcon.classList.toggle('open-search')
  dropdownMenu.classList.remove('visible')
  menuIcon.classList.remove('open-menu')
})

loginBtn.addEventListener('click', (event) => {
  event.preventDefault() // you can't actually log in, no need for the page to refresh

  if (!emailInput.value || !passwordInput.value) {
    alert('Please provide your email and password') // placeholder, will implement a better solution
  }
})