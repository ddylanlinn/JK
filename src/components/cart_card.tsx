import React, {useState, useContext} from 'react'
import {RouteContext} from '../context'
import styled from '@emotion/styled'
import '../styles.css'

const Wapper = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

const ProductTitle = styled.div`
  width: 60%;
  margin-left: 5px;
`

const ProductAmount = styled.div`
  width: 15%;
  margin-left: 5px;
`

interface ProductCardT {
  name: string
  price: number
  img: any
  amount: number
}

export const CartCard = (props: ProductCardT) => {
  const {name, price, img, amount} = props

  return (
    <Wapper>
      <img src={img} style={{width: '25%', borderRadius: '10px'}} alt="item" />
      <ProductTitle>
        <div>{name}</div>
        <div>$ {price}</div>
      </ProductTitle>
      <ProductAmount>{amount}</ProductAmount>
    </Wapper>
  )
}
