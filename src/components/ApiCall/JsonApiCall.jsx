import useApiCall from '../../customHooks/useApiCall'

const JsonApiCall = () => {
  const [data, error] = useApiCall('https://jsonplaceholder.typicode.com/todos/1', 'GET')
  console.log(data)
  
  return ([data])
  
}

export default JsonApiCall