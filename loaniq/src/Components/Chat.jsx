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
    const [adminList, setAdminList] = useState([])

    const socket = io('https://loaniq-server.glitch.me')

    useEffect(() => {
        try {socket.emit('get user', JSON.parse(localStorage.getItem('userInfo'))[0])}
        catch {socket.emit('get user', 'Guest')}

        socket.on('addAdminList', admin=>setAdminList(adminList.push(admin.admin)))
        socket.on('removeAdminList', admin=>{
            console.log(admin)
            setAdminList(adminList.pop(admin))
            console.log(adminList)
        })

  
        socket.on('ping admin', room =>{
            try {
                if (JSON.parse(localStorage.getItem('userInfo'))[0].firstname === room) {
                    setRoom(room)
                    setHuman(true)
                    socket.emit('admin join', room)
                }
            } catch {}
        })


        socket.on('chat message', message => {
            let messages = document.getElementById('messages')
            let newMessage = document.createElement('div')
            try {
                if (JSON.parse(localStorage.getItem('userInfo'))[0].firstname === message.user) {
                    newMessage.classList.add('user-message')
                } else {
                    newMessage.classList.add('bot-message')
                }
            } catch {}
                newMessage.innerHTML = `
                    <small>${message.user}</small>
                    <p>${message.msg}</p>`
                messages.appendChild(newMessage)
                messages.scrollTop += 1000
        })
        socket.on('adminList', listRequest => {
            if (listRequest.userid === JSON.parse(localStorage.getItem('userInfo'))[0].userid) {
                const messages = document.querySelector('#messages')
                let newMessage = document.createElement('div')
                    newMessage.classList.add('bot-message')
                if (!adminList.length) {
                    newMessage.innerHTML += `<p>No admins are available at the moment. Type 2 to chat with LoanBot.</p>`
                    messages.appendChild(newMessage)
                    messages.scrollTop += 1000
                } else {
                    newMessage.innerHTML += `
                        <small>LoanBot</small>
                        <p id='adminlist'>Click on an admin to chat with them:<br></p>`
                    
                    const list = newMessage.querySelector('#adminlist')
                    adminList.forEach(admin => {
                        list.innerHTML += `<mark>${admin}</mark><br>`
                    })
                    messages.appendChild(newMessage)
                    newMessage.scrollTop += 1000
                    newMessage.querySelectorAll('mark').forEach(admin => {
                        admin.addEventListener('click', () => {
                            setRoom(admin.textContent)
                            socket.emit('joinRoom', admin.textContent)
                            let messages = document.getElementById('messages')
                            let newMessage = document.createElement('div')
                            newMessage.classList.add('bot-message')
                            newMessage.innerHTML = `
                                <small>LoanBot</small>
                                <p>You are now chatting with ${admin.textContent}. Type 2 to chat with LoanBot.</p>`
                            messages.appendChild(newMessage)
                            messages.scrollTop += 1000

                        })
                    })

                }
            }
            
        })

    },[])
    async function enterMessage(event){
        if(event.key === 'Enter' || event.type === 'click'){

            let message = event.target.value || document.querySelector('#input-box').querySelector('input').value
            event.target.blur()
            document.querySelector('#input-box').querySelector('input').value = ''
            let messages = document.getElementById('messages')
            const history = []
            messages.childNodes.forEach(child => history.push(child.textContent))

            if(message === '1'){
                setHuman(true)
                try {socket.emit('get adminList', JSON.parse(localStorage.getItem('userInfo'))[0].userid)}
                catch{
                    let messages = document.getElementById('messages')
                    let newMessage = document.createElement('div')
                    newMessage.classList.add('bot-message')
                    newMessage.innerHTML = `
                        <small>LoanBot</small>
                        <p>Please log in to chat with a representative.</p>`
                    messages.appendChild(newMessage)
                    messages.scrollTop += 1000
                }
            } else if (message === '2') {
                setHuman(false)
                const botReply = document.createElement('div')
                botReply.innerHTML = `
                    <small>LoanBot</small>
                    <p>You are now chatting with me.</p>`
                botReply.classList.add('bot-message')
                messages.appendChild(botReply)
                messages.scrollTop += 1000
            }else if(!human){
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
            } else { socket.emit('chat message', {user: JSON.parse(localStorage.getItem('userInfo'))[0].firstname,room,message}) }
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
                            <p>Type 1 to chat with a representative.</p>
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
