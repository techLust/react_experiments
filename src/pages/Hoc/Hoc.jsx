import React from 'react'
import withLoader from '../../components/HocComponent/Loader'
import User from '../../components/User/User'


const Hoc = () => {
    return (
        <>
            <EnhancedComponent />
        </>
    )
}

const EnhancedComponent = withLoader(User)
export default Hoc