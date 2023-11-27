import React, { useEffect, useState } from 'react'
import { socketConnection } from '../../socket'

export const Chat = () => {
    const [message, setMessage] = useState('')
    const [resMessage, setResMessage] = useState([])
    const [socket, setSocket] = useState(null)

    const sendMessage = (message) => {
        console.log(message)
        socket?.emit('send_message', { 'message': message });
    }


    const getMessage = () => {
        socket?.on('new_message', (message) => {
            console.log('MESSAFE', message)
            setResMessage(prev => [...prev, message])
        })
    }


    useEffect(() => {
        document.title = 'chat with me'
    }, [])

    useEffect(() => {
        setSocket(socketConnection.connect());
        console.log('User connected', socket)
    }, [])

    useEffect(() => {
        if (socket) {
            getMessage()
        }
    }, [socket])

    return (
        <div>
            <h2>Chat</h2>
            <div>
                <label>Message</label>
                <input
                    type='text'
                    name='message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
            </div>
            <button onClick={() => sendMessage(message)}>Send message</button>

            <div>
                {
                    resMessage?.map((el, i) => {

                        return <div key={`$text${i}`}>
                            <p >{el.message}</p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
