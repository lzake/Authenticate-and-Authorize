const url = 'http://localhost:3000/'

$(() => {
  $('.menu .item').tab()
  $('.checkbox').checkbox()
  $('form.login').submit(logIn)
  $('form.signup').submit(signUp)
})

function logIn(event) {
  event.preventDefault()
  const username = $('input[name=login-username').val() 
  const password = $('input[name=login-password').val() 
  const data = {username, password}
  $.post(`${url}auth/login`, data)
    .then(response => {
      console.log(response) 
    })
}

function signUp(event) {
  event.preventDefault()
  const username = $('input[name=signup-username').val() 
  const email = $('input[name=signup-email').val() 
  const password = $('input[name=signup-password').val() 
  const data = {username, email, password}
  $.post(`${url}auth/signup`, data)
    .then(response => {
      console.log(response) 
    })
}
