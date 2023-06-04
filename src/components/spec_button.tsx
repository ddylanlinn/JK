import React, {useState, useContext} from 'react'
import {RouteContext} from '../context'
import styled from '@emotion/styled'
import '../styles.css'

const SpecBtn = styled.div<{stock: boolean; selected: boolean}>`
  border: ${(props) => !props.selected && '2px solid #3d3f4e'};
  border-radius: 5px;
  width: fit-content;
  padding: 5px;
  min-width: 30px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: 10px;
  background: ${(props) => props.selected && '#b82944'};
  &:hover {
    cursor: pointer;
  }
`

interface SpecButtonT {
  text: string
  stock: boolean
  selected: boolean
}

export const SpecButton = (props: SpecButtonT) => {
  const {text, stock, selected} = props

  return <SpecBtn {...{stock, selected}}>{text}</SpecBtn>
}
