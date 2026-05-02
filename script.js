const chatMessages = document.querySelector('.chat-messages')
const chatForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')

let usuarioAtual = "Ayslla"
const CHAT_KEY = "chat"

function criarMsg(msg) {
  return `<div class="message ${msg.sender === usuarioAtual ? 'blue-bg' : 'gray-bg'}">
    <b>${msg.sender}</b><br>${msg.text}
  </div>`
}

function mostrar() {
  chatMessages.innerHTML = ""
  let msgs = JSON.parse(localStorage.getItem(CHAT_KEY)) || []
  msgs.forEach(m => chatMessages.innerHTML += criarMsg(m))
}

chatForm.addEventListener("submit", e => {
  e.preventDefault()

  let msg = {
    sender: usuarioAtual,
    text: chatInput.value
  }

  let msgs = JSON.parse(localStorage.getItem(CHAT_KEY)) || []
  msgs.push(msg)
  localStorage.setItem(CHAT_KEY, JSON.stringify(msgs))

  chatInput.value = ""
  mostrar()
})

document.getElementById("Ayslla-selector").onclick = () => usuarioAtual = "Ayslla"
document.getElementById("Mylla-selector").onclick = () => usuarioAtual = "Mylla"

mostrar()