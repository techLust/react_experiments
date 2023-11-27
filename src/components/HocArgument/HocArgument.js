import React from 'react'

const HocArgument = (props) => {
    return (
        <>
            <div>{props.message}</div>
            <div>{props.modifiedValue}</div>
        </>
    )
}
export default HocArgument