import React, {useState,useEffect} from 'react'
import '../css/chat.scss'
import { IoChatboxEllipses } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
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
    async function enterMessage(event, props){
        if(event.key === 'Enter' || event.type === 'click'){
            let message = event.target.value || document.querySelector('#input-box').querySelector('input').value
            event.target.blur()
            document.querySelector('#input-box').querySelector('input').value = ''
            let messages = document.getElementById('messages')
            const history = []
            messages.childNodes.forEach(child => history.push(child.textContent))
            let newMessage = document.createElement('div')
            newMessage.classList.add('user-message')
            newMessage.innerHTML = `
                <small>You</small>
                <p>${message}</p>`
            messages.appendChild(newMessage)
            messages.scrollTop += 1000
            const botMessage = await fetch('http://localhost:4000/api/botMessage', {
                body: JSON.stringify({message,history}), 
                method: 'POST', 
                headers: {'Content-Type': 'application/json'}
            }).then(response => response.json()).then(data => data)
            const botReply = document.createElement('div')
            botReply.innerHTML = `
                <small>LoanBot</small>
                <p>${botMessage}</p>`
            botReply.classList.add('bot-message')
            messages.appendChild(botReply)
            messages.scrollTop += 1000
        }
    }
    function openChat(){
        let chat = document.getElementById('chat-container')
        let chatBtn = document.querySelector('.openChatBtn')
        let closeBtn = document.querySelector('.closeBtn')
        chat.classList.toggle('open')
        chatBtn.classList.toggle('open')
        closeBtn.classList.toggle('open')
    }
    return (
        <div>
        <button class="openChatBtn" onClick={openChat}><IoChatboxEllipses /></button>
        <div class="fullChat">
            <div className='chat'>
                <div id='chat-container'>
                    <div class="d-flex align-items-center chat-header">
                        <RiRobot2Line />
                        <div class="d-flex flex-column">
                            <p class="m-0 ms-3">LoanBot</p>
                            <small class="ms-3 text-success">Online</small>
                        </div>
                        <button class="closeBtn" onClick={openChat}><IoClose /></button>    
                    </div>
                    <div id="messages">
                        <div class="bot-message">
                            <small>LoanBot</small>
                            <p>Hi there! What can I help you with today?</p>
                        </div>
                    </div>
                    <small></small>
                    <form id="input-box">
                        <input type="text" placeholder='Write a message' onKeyDown={enterMessage}></input>
                        <button type="button" class="send-btn" onClick={enterMessage}><LuSend /></button>
                    </form>
                </div>
            </div>
        </div>
        </div>
  )
}
