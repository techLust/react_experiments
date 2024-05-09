import React, { useState } from 'react'

const User = (props) => {
    const [input, setInput] = useState({
        name: '',
        address: '',
    })

    const inputHandlar = e => setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const showInput = () => console.log(input)

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Role: {props.role}</p>

            <h4>Fill up</h4>
            {/* <input type='text' name='name' value={input.name} onChange={e => setInput(prev => ({...prev, [e.target.name] : e.target.value}))} />
        <input type='text' name='address' value={input.address} onChange={e => setInput(prev => ({...prev, [e.target.name] : e.target.value}))} /> */}


            <input type='text' name='address' value={input.address} onChange={inputHandlar} />
            <button type='button' onClick={showInput}>Show</button>
            <button>Login with Google</button>
        </div>
    )
}

export default User