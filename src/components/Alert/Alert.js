import React from "react";
import styled from '@emotion/styled'

const AlertError = styled.div`
        background-color: #f8d7da;
        padding: 10px;
        border-radius: 5px;
`
const AlertMessage = styled.p`
        color: #721c24
`

const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column'
}))

function Alert({ message }) {
    return (
        <AlertError>
            <AlertMessage role="alert">{message}</AlertMessage>
        </AlertError>
    )
}

export { Alert }