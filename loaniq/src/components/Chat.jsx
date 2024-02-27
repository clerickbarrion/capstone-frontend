import React from 'react'
import '../css/chat.scss'

export default function Chat() {
    async function enterMessage(event){
        if(event.key === 'Enter'){
            let message = event.target.value
            event.target.value = ''
            let messages = document.getElementById('messages')
            let newMessage = document.createElement('p')
            newMessage.textContent = `You: ${message}`
            messages.appendChild(newMessage)
            const botMessage = await fetch('http://localhost:4000/api/botMessage', {
                body: JSON.stringify({message}), 
                method: 'POST', 
                headers: {'Content-Type': 'application/json'}
            }).then(response => response.json()).then(data => data)
            let botReply = document.createElement('p')
            botReply.textContent = `Kale: ${botMessage}`
            messages.appendChild(botReply)
            event.target.blur()
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
