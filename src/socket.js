import { io } from 'socket.io-client'

const API_ENDPOINT = process.env.REACT_APP_ENDPOINT
console.log('API ENDPOINT',API_ENDPOINT)

export const socketConnection = io(API_ENDPOINT, {
    autoConnect: false
})