import React from 'react'
import HocArgument from '../HocArgument/HocArgument'

const HocComponent = (HocArgument) => {
    
    return (props) => {
        const newValue = {
            newProp: 'This is from Hoc Component'
        }

        return <HocArgument {...props} {...newValue}/>
    }
}
const EnhancedComponent = HocComponent(HocArgument)

export default EnhancedComponent