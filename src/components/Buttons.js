import React from 'react';
import styled from "styled-components";

import './Keyframes.css';

const Wrapper = styled.div`
  height: 80px;

  margin: 0 auto;
`

const Button = styled.button`
    width: 64px;
    height: 64px;

    overflow: hidden;

    border-radius: 100px;

    outline: none;

    border: 1px solid #ddd;

    ${props => props.id === 'love' ? 'color: pink' : 'color: grey'}

    font-size: 28px;

    ${props => props.id === 'love' ? '' : 'margin-right: 15px'}

    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;

    &:hover {
        font-size: 34px;

        border: 1px solid #a2a2a2;

        ${props => props.id === 'love' ? 'color: red' : 'color: #222'}
    }

    &:active {
        -webkit-box-shadow: 0 2px 3px 0 rgba(0,0,0,0.25);
        box-shadow: 0 2px 3px 0 rgba(0,0,0,0.25);

        border: 1px solid black;

        ${props => props.id === 'love' ? 'color: red' : 'color: #222'}
    }
`

const Buttons = props => {
    return (
        <Wrapper>
            <Button id="hate" onClick={props.onDecline}><i className="fa fa-times"></i></Button>
            <Button id="love" onClick={props.onAccept}><i className="fa fa-heart"></i></Button>
        </Wrapper>
    )
}

export default Buttons;