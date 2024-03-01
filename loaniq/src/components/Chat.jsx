import React, {useState,useEffect} from 'react'
import '../css/chat.scss'
import {io} from 'socket.io-client'

export default function Chat() {
    const [human, setHuman] = useState(false)
    const [room, setRoom] = useState('')

    const socket = io('http://localhost:4000')

    useEffect(() => {
        socket.on('chat message', message => {
            let messages = document.getElementById('messages')
            let newMessage = document.createElement('p')
            newMessage.textContent = message
            messages.appendChild(newMessage)
            messages.scrollTop += 1000
        })
    },[])
    

    async function enterMessage(event){
        if(event.key === 'Enter'){
            let message = event.target.value
            event.target.blur()
            event.target.value = ''
            let messages = document.getElementById('messages')
            const history = []
            messages.childNodes.forEach(child => history.push(child.textContent))
            let newMessage = document.createElement('p')
            if (human){
                socket.emit('chat message', {message,room})
            }else{
                if (message === '1'){
                    newMessage.innerHTML = `Click on one of these people to chat with them:\n
                                            <mark>Clerick</mark>\n
                                            <mark>John</mark>\n`
                    messages.appendChild(newMessage)
                    const names = newMessage.querySelectorAll('mark')
                    names.forEach(name => {
                        name.addEventListener('click', () => {
                            socket.emit('joinRoom', name.textContent)
                            setHuman(true)
                            setRoom(name.textContent)
                        })
                    })
                } else {
                    newMessage.textContent = `You: ${message}`
                    messages.appendChild(newMessage)
                    messages.scrollTop += 1000
                    const botMessage = await fetch('http://localhost:4000/api/botMessage', {
                        body: JSON.stringify({message,history}), 
                        method: 'POST', 
                        headers: {'Content-Type': 'application/json'}
                    }).then(response => response.json()).then(data => data)
                    const botReply = document.createElement('p')
                    botReply.textContent = `Kale: ${botMessage}`
                    messages.appendChild(botReply)
                    messages.scrollTop += 1000
                }
            }
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
                    <p>Kale: Hi there! What can I help you with today? Type 1 to chat with a human.</p>
                </div>
                <small></small>
                <form id="input-box">
                    <textarea placeholder='Write a message' onKeyDown={enterMessage}></textarea>
                </form>
            </div>
        </div>
  )
}
