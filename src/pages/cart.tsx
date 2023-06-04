import React, {useState, useContext} from 'react'
import {RouteContext, DevelopingContext} from '../context'
import styled from '@emotion/styled'
import {CartCard} from '../components'

const Wrapper = styled.div`
  max-width: 500px;
  height: fit-content;
  margin: 0 auto;
  background: #060709;
  height: 100vh;
  padding: 10px;
`

const Topbar = styled.div`
  text-align: center;
  padding: 10px 0;
  position: relative;
`

const BackBtn = styled.div`
  border: 1px solid white;
  border-top: none;
  border-right: none;
  width: 10px;
  height: 10px;
  position: absolute;
  transform: rotate(45deg);
  top: 15px;
  left: 15px;
  &:hover {
    cursor: pointer;
  }
`

const ProductCardGroup = styled.div`
  margin-top: 10px;
`

const Cost = styled.div`
  position: fixed;
  bottom: 10%;
  right: 10%;
  width: 80%;
  text-align: center;
`

const CheckBtn = styled.div`
  position: fixed;
  bottom: 2%;
  right: 10%;
  width: 80%;
  background: #b82944;
  border-radius: 10px;
  text-align: center;
  padding: 10px 25px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`

export const Cart = () => {
  const {setRoute} = useContext(RouteContext)
  const {setDisplayDevelopingPop} = useContext(DevelopingContext)
  return (
    <Wrapper>
      <Topbar>
        <BackBtn onClick={() => setRoute('product')} />
        購物車
      </Topbar>
      <ProductCardGroup>
        <CartCard
          {...{
            name: '21-22 攻城獅主戰球褲',
            price: 100,
            img: './images/product1.png',
            amount: 3
          }}
        />
        <CartCard
          {...{
            name: '攻城獅三對三直紋球衣',
            price: 200,
            img: './images/product2.png',
            amount: 2
          }}
        />
        <CartCard
          {...{
            name: '攻城獅運動背心',
            price: 300,
            img: './images/product3.png',
            amount: 2
          }}
        />
        <CartCard
          {...{
            name: '22-23好野人露營風格收納箱',
            price: 400,
            img: './images/product4.png',
            amount: 1
          }}
        />
      </ProductCardGroup>

      <Cost>Total: $ 1000</Cost>
      <CheckBtn onClick={() => setDisplayDevelopingPop(true)}>結帳</CheckBtn>
    </Wrapper>
  )
}
