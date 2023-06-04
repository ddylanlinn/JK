import React, {useState, useContext} from 'react'
import {RouteContext} from '../context'
import styled from '@emotion/styled'
import '../styles.css'
import {SpecButton} from '../components'

const data = {
  name: '22-23 LIONEERS球員訓練短TEE',
  prices: '1,580',
  note: `．於訂單備註填寫需要的球員
．球員搭配號碼不可替換
．訂單需要十四天`,
  category: '這邊填寫純文字內容',
  description: `攻城獅團隊專為球員打造的高端High End系列，以提供球員私下訓練時與場上暖身為主要訴求的機能裝備，
  全系列在版型及用料上精心挑選，採用彈性輕量面料合身且透氣，讓你在健身、訓練、打球或戶外活動時仍保持清爽舒適。
`,
  productNoteDetail: `避免使用柔軟精、漂白水、冷洗精、等衣物清潔劑，避免影響機能布料功效`
}

const Wrapper = styled.div<{display: boolean}>`
  z-index: 3;
  position: fixed;
  bottom: 0;
  right: 0;
  background: #2e303f;
  width: 100%;
  height: ${(props) => (props.display ? 'fit-content' : '0px')};
`

const TopSection = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid black;
`

const ProductTitle = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProductName = styled.div`
  font-size: 16px;
`

const ProductPrice = styled.div`
  font-size: 20px;
`

const SpecSection = styled.div`
  padding: 10px;
  border-bottom: 1px solid black;
`

const SpecBtnGroup = styled.div`
  display: flex;
`

const SizeSection = styled.div``

const ColorSection = styled.div`
  margin-top: 10px;
`

const AmountSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const AmountAdjustment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100px;
`

const AmountInput = styled.input`
  background: #2e303f;
  border: none;
  border-color: transparent;
  width: 20px;
`

const AddBtn = styled.div`
  margin: 10px;
  background: #b82944;
  border-radius: 10px;
  text-align: center;
  padding: 10px 25px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`

interface PreviewPopT {
  previewPopType: 'cart' | 'check' | ''
  setPreviewPopType: React.Dispatch<React.SetStateAction<'cart' | 'check' | ''>>
}

export const PreviewPop = (props: PreviewPopT) => {
  const {route, setRoute} = useContext(RouteContext)

  const {previewPopType, setPreviewPopType} = props
  const btnWording = previewPopType === 'cart' ? '加入購物車' : '直接購買'

  const display = previewPopType !== ''
  console.log(display)
  return (
    <Wrapper display={previewPopType !== ''}>
      <TopSection>
        <img
          src="./images/shirt_1.webp"
          style={{width: '70px', borderRadius: '10px'}}
          alt="item"
        />
        <ProductTitle>
          <ProductName>{data.name}</ProductName>
          <ProductPrice>${data.prices}</ProductPrice>
        </ProductTitle>
        <img
          onClick={() => setPreviewPopType('')}
          src="./images/cancel.png"
          style={{width: '10px', height: '10px'}}
          alt="item"
        />
      </TopSection>

      <SpecSection>
        <SizeSection>
          尺寸
          <SpecBtnGroup>
            <SpecButton
              {...{
                text: 'S',
                stock: true,
                selected: true
              }}
            />
            <SpecButton
              {...{
                text: 'M',
                stock: true,
                selected: false
              }}
            />
            <SpecButton
              {...{
                text: 'L',
                stock: true,
                selected: false
              }}
            />
            <SpecButton
              {...{
                text: 'XL',
                stock: true,
                selected: false
              }}
            />
          </SpecBtnGroup>
        </SizeSection>

        <ColorSection>
          顏色
          <SpecBtnGroup>
            <SpecButton
              {...{
                text: '酷炫黑',
                stock: true,
                selected: true
              }}
            />
            <SpecButton
              {...{
                text: '耀眼黃',
                stock: true,
                selected: false
              }}
            />
            <SpecButton
              {...{
                text: '炫風紫',
                stock: true,
                selected: false
              }}
            />
            <SpecButton
              {...{
                text: '躍動紅',
                stock: true,
                selected: false
              }}
            />
          </SpecBtnGroup>
        </ColorSection>
      </SpecSection>

      <AmountSection>
        購買數量
        <AmountAdjustment>
          <img
            src="./images/minus.png"
            style={{width: '12px', height: '12px'}}
            alt="icon"
          />
          <AmountInput value={2} />
          <img
            src="./images/plus.png"
            style={{width: '12px', height: '12px'}}
            alt="icon"
          />
        </AmountAdjustment>
      </AmountSection>

      <AddBtn>{btnWording}</AddBtn>
    </Wrapper>
  )
}
