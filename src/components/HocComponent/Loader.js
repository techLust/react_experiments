import React, { useState } from 'react'

const withLoader = (WraperComponent) => {
  return () => {
    const [loading, setLoading] = useState(true)

    const user = {
      name: 'Mahatab',
      role: 'SDE'
    }

    setTimeout(() => {
      setLoading(false)
    }, 3000)

    return (
      <div>{loading ? <p>Loading...</p> : <WraperComponent {...user} />}</div>
    )
  }
}

export default withLoader