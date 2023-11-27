import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useSendData = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        return async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            setData(data)
        }
    }, [])

    return (
        [data]
    )
}

export default useSendData