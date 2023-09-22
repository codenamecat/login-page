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
const loginMessage = document.getElementById('login-message')

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
  event.preventDefault()
  // you can't actually log in so this is just extra
  
  if (!emailInput.value || !passwordInput.value) {
    loginMessage.textContent = 'Email and password required'
    loginMessage.classList.add('visible')
    removeMessage()
  } else if (!emailInput.value.includes('@')) {
    loginMessage.textContent = 'Invalid email address'
    loginMessage.classList.add('visible')
    removeMessage()
  } else {
    loginMessage.textContent= 'You logged in!'
    loginMessage.classList.add('visible')
    removeMessage()
  }
})

const removeMessage = () => {
  setTimeout(() => {
    loginMessage.textContent = ''
    loginMessage.classList.remove('visible')
  }, 5000)
}