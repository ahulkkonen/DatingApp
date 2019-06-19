import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  height: 40px;
  background-color: white;
  
  box-shadow: 0 2px 1px rgba(100, 100, 100, 0.5);
  z-index: 100;
  position: relative;

  text-align: center;
`

const Logo = styled.img`
    height: 28px;
    margin-top: 6px;
`

const TopBar = props => {
    return (
        <Wrapper>
            <Logo src="/logo.png" alt="" />
        </Wrapper>
    )
}

export default TopBar;