import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  background-color: white;
`

const Card = styled.div`
    width: 240px;
    border: 1px solid #ccc;
    border-radius: 10px;

    margin: 20px auto 0 auto;

    -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);

    ${props => props.animation === 'love' ? '-webkit-animation: love 0.7s ease-out; animation: love 0.7s ease-out; animation-fill-mode: forwards; -webkit-animation-fill-mode: forwards;' : ''}
    ${props => props.animation === 'hate' ? '-webkit-animation: hate 0.7s ease-out; animation: hate 0.7s ease-out; animation-fill-mode: forwards; -webkit-animation-fill-mode: forwards;' : ''}
    ${props => props.animation === 'fadeIn' ? '-webkit-animation: fadeIn 0.2s linear; animation: fadeIn 0.2s linear; animation-fill-mode: forwards; -webkit-animation-fill-mode: forwards;' : ''}
    ${props => props.animation === 'fadeOut' ? '-webkit-animation: fadeOut 0s linear; animation: fadeOut 0s linear; animation-fill-mode: forwards; -webkit-animation-fill-mode: forwards;' : ''}
`

const PropertyImage = styled.img`
    border-radius: 10px 10px 0 0;

    width: 100%;
    height: 250px;
    object-fit: cover;
`

const PropertyName = styled.h1`
    font-size: 20px;

    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 3px;

    text-transform: capitalize;
`

const PropertyAge = styled.span`
    font-size: 18px;
`

const PropertyDetails = styled.div`
    margin-left: 11px;
    margin-top: 0px;
    margin-bottom: 10px;

    font-size: 12px;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 250px;

    overflow: hidden;
`

const formatPrice = price => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + " €"
}

const PropertyCard = props => {
    return (
        <Wrapper>
            <Card animation={props.animation}>
                <ImageWrapper><PropertyImage src={props.imageUri} /></ImageWrapper>
                <PropertyName>{props.name}, <PropertyAge>{props.age}</PropertyAge> </PropertyName>
                <PropertyDetails>{formatPrice(props.price)}</PropertyDetails>
            </Card>
        </Wrapper>
    )
}

export default PropertyCard;