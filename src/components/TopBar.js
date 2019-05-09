import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  height: 40px;
  background-color: white;
  
  display: flex;
  align-items: stretch;
  box-shadow: 0 2px 1px rgba(100, 100, 100, 0.5);
  justify-content: center;
  z-index: 100;
  position: relative;
`

const Logo = styled.span`
    object-fit: contain;
    font-size: 26px;
    margin: 4px 0 0 0; padding: 0;
`


const TopBar = props => {
    return (
        <Wrapper>
            <Logo role="img" aria-label="flame">🔥DatingApp</Logo>
        </Wrapper>
    )
}

export default TopBar;