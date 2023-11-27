import React from 'react'
import useSendData from '../../customHooks/useSendData'
import useApiCall from '../../customHooks/useApiCall'

const path = 'https://jsonplaceholder.typicode.com/todos/1'
const method = 'GET'

const HookExp = () => {
    // const [data] = useSendData()
    // console.log('Data from useSendData', data)

    const [data, error] = useApiCall(path, method)

    console.log('data from custom hook', data)

    return (
        <div>HookExp</div>
    )
}

export default HookExp