const messages = document.querySelectorAll( '.js-message')

if (messages) {
  messages.forEach(message => {
    message.addEventListener('click', (evt) => {
      alert('Hello, world!')
    })
  })
}
