import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 30vh;
    height: 40vh;
    padding: 3%;
    background-color: white;
    color: black;
    box-shadow: 8px 8px 2px 1px rgba(0, 0, 0, .2);
`
const Image = styled.img`
    width: 90%;
    height: 35%;
    align-items: top;
`

const Title = styled.h3`
    font-size: 1.5rem;
    text-align: left;
`

const Description = styled.p`
    font-size: 1rem;
    text-aligh: left;
`
const DeliveryInfo = styled.p`
    font-size: 1rem;
    text-aligh: left;
    padding: .25rem;
    border: thick double #32a1ce;
    color: black;
`


const Cards = ({img, title, price, category, deliveryTime, deliveryPrice}) => {
    return(
        <Container>
            <Image src={img} alt='' />
            <Title>{title}</Title>
            <Description>{price} - {category}</Description>
            <DeliveryInfo>{deliveryTime}</DeliveryInfo>
            <DeliveryInfo>{deliveryPrice} Delivery Fee!</DeliveryInfo> 
        </Container>
    )
}
export default Cards;