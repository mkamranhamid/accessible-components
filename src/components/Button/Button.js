import React from "react";
import styled from '@emotion/styled'

const Button = styled.button`
    padding: 20px 30px;
    margin-top: 30px;
    outline: none;
    border: none;
    font-size: medium;
    font-weight: 600;
    letter-spacing: 5px;
    border-radius: 5px;
    cursor: pointer;
    background: linear-gradient( 135deg, rgba(30, 29, 31, 1) 0%, #9E9E9E 100%);
    color: grey;
    &.active{
        transform: translateY(2px); 
    }
`

export { Button }