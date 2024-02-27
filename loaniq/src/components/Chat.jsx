import React from 'react'
import '../css/chat.scss'

export default function Chat() {
    async function enterMessage(event){
        if(event.key === 'Enter'){
            let message = event.target.value
            event.target.blur()
            event.target.value = ''.trim()
            let messages = document.getElementById('messages')
            const history = []
            messages.childNodes.forEach(child => history.push(child.textContent))
            let newMessage = document.createElement('p')
            newMessage.textContent = `You: ${message}`
            messages.appendChild(newMessage)
            messages.scrollTop += 1000
            const botMessage = await fetch('http://localhost:4000/api/botMessage', {
                body: JSON.stringify({message,history}), 
                method: 'POST', 
                headers: {'Content-Type': 'application/json'}
            }).then(response => response.json()).then(data => data)
            let botReply = document.createElement('p')
            botReply.textContent = `Kale: ${botMessage}`
            messages.appendChild(botReply)
            console.log(messages)
            messages.scrollTop += 1000
        }
    }
    function openChat(){
        let chat = document.getElementById('chat-container')
        chat.classList.toggle('open')
    }
    return (
        <div className='chat'>
            <button onClick={openChat}>Chat</button>
            <div id='chat-container'>
                <div id="messages">
                    <p>Kale: Hi there! What can I help you with today?</p>
                </div>
                <small></small>
                <form id="input-box">
                    <textarea placeholder='Write a message' onKeyDown={enterMessage}></textarea>
                </form>
            </div>
        </div>
  )
}
