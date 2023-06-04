import React, {useState, useContext} from 'react'
import {DevelopingContext} from '../context'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`

const Container = styled.div`
  padding: 20px;
  background: white;
  color: black;
  white-space: pre;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Btn = styled.div`
  border-radius: 5px;
  background: #c7c9d8;
  color: black;
  padding: 5px 10px;
  width: fit-content;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`

export const DevelopingPop = () => {
  const {setDisplayDevelopingPop} = useContext(DevelopingContext)
  return (
    <Wrapper>
      <Container>
        Not enough time to develop
        <br />
        sorry dude
        <Btn onClick={() => setDisplayDevelopingPop(false)}>お疲れ様です</Btn>
      </Container>
    </Wrapper>
  )
}
