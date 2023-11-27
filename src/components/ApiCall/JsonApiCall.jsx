import React from 'react'
import useApiCall from '../../customHooks/useApiCall'

const JsonApiCall = () => {
  const [data, error] = useApiCall('/get/users', 'GET')
  console.log(data)
  
  return (
    <div>

    </div>
  )
}

export default JsonApiCall