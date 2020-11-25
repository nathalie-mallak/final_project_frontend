import React from 'react'

const Nat = props => {
    return (
        <>
            {props.getFlowers().map(item => <p> {item} </p> )}
        </>
    )
}

export default Nat
