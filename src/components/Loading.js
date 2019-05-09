import React from 'react';
import styled from "styled-components";

import './Loader.css';

const Wrapper = styled.div`
  flex: 1;
  background-color: white;
`

const Loader = styled.div`

`

const Loading = props => {
    return (
        <Wrapper>
            <Loader className="loader" />
        </Wrapper>
    )
}

export default Loading;