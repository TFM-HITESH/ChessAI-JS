const chatbotToggler = document.querySelector('.chatbot-toggler')
const closeBtn = document.querySelector('.close-btn')
const chatbox = document.querySelector('.chatbox')
const chatInput = document.querySelector('.chat-input textarea')
const sendChatBtn = document.querySelector('.chat-input span')
let userMessage = null // Variable to store user's message
const API_KEY = 'INVALID KEY' // Paste your API key here
const inputInitHeight = chatInput.scrollHeight
const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement('li')
    chatLi.classList.add('chat', `${className}`)
    let chatContent =
        className === 'outgoing'
            ? `<p></p>`
            : `<span class="material-symbols-outlined">smart_toy</span><p></p>`
    chatLi.innerHTML = chatContent
    chatLi.querySelector('p').textContent = message
    return chatLi // return chat <li> element
}
