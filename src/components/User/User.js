import React, { useState } from 'react'

const User = (props) => {
const [input, setInput] = useState({
    name: '',
    address: '',
})

   return(
    <div>
        <p>Name: {props.name}</p>
        <p>Role: {props.role}</p>

        <h4>Fill up</h4>
        <input type='text' name='name' value={input.name} onChange={e => setInput(prev => ({...prev, [e.target.name] : e.target.value}))} />
        <input type='text' name='address' value={input.address} onChange={e => setInput(prev => ({...prev, [e.target.name] : e.target.value}))} />
    </div>
   )
}

export default User