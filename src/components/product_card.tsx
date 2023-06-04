import React, {useState, useContext} from 'react'
import {RouteContext} from '../context'
import styled from '@emotion/styled'
import '../styles.css'

const Wapper = styled.div`
  width: 45%;
  border-radius: 10px;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`

interface ProductCardT {
  name: string
  prices: Record<string, number>
  img: any
}

export const ProductCard = (props: ProductCardT) => {
  const {name, prices, img} = props

  const pricesRange = Object.values(prices)
  const minPrice = Math.min(...pricesRange)
  const maxPrice = Math.max(...pricesRange)
  const pricesWording =
    minPrice === maxPrice ? `$ ${minPrice}` : `$ ${minPrice} - $ ${maxPrice}`

  return (
    <Wapper>
      <img
        src={img}
        style={{width: '100%', borderRadius: '10px 10px 0 0'}}
        alt="item"
      />
      <div>{name}</div>
      <div>{pricesWording}</div>
    </Wapper>
  )
}
