import React, {useState, useContext} from 'react'
import {RouteContext} from '../context'
import styled from '@emotion/styled'
import {ProductCard} from '../components'

const Wrapper = styled.div`
  max-width: 500px;
  height: fit-content;
  margin: 0 auto;
  background: #060709;
  height: 100vh;
  padding: 10px;
`

const PageTitle = styled.div`
  margin: 0 auto;
  text-align: center;
`

const ProductCardGroup = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const Home = () => {
  const {route, setRoute} = useContext(RouteContext)

  return (
    <Wrapper>
      <PageTitle>街口攻城獅官方商城</PageTitle>
      <ProductCardGroup>
        <ProductCard
          {...{
            name: '21-22 攻城獅主戰球褲',
            prices: {black: 100, red: 200, yellow: 150},
            img: './images/product1.png'
          }}
        />
        <ProductCard
          {...{
            name: '攻城獅三對三直紋球衣',
            prices: {black: 100, red: 200, yellow: 150},
            img: './images/product2.png'
          }}
        />
        <ProductCard
          {...{
            name: '攻城獅運動背心',
            prices: {black: 100, red: 200, yellow: 150},
            img: './images/product3.png'
          }}
        />
        <ProductCard
          {...{
            name: '22-23好野人露營風格收納箱',
            prices: {black: 100, red: 200, yellow: 150},
            img: './images/product4.png'
          }}
        />
      </ProductCardGroup>
    </Wrapper>
  )
}
