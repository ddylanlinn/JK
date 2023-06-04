import React, {useState, useContext} from 'react'
import {RouteContext} from '../context'
import styled from '@emotion/styled'
import '../styles.css'
import {Navbar} from '../components'
import {PreviewPop} from '../components'

const Wrapper = styled.div`
  max-width: 500px;
  height: fit-content;
  margin: 0 auto;
  background: #060709;
  padding-bottom: 60px;
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

const TitleSection = styled.div`
  background: #1b1e27;
  margin: 10px 5px;
  border-radius: 10px;
  padding: 10px;
`

const ProductName = styled.div`
  font-size: 18px;
`

const ProductPrices = styled.div`
  font-size: 18px;
`

const DiscountInfoWapper = styled.div`
  margin-top: 5px;
  display: flex;
`

const DiscountInfo = styled.div`
  background: #60223b;
  padding: 3px;
  border-radius: 2px;
  width: fit-content;
  font-size: 12px;
  margin-right: 5px;
`

const ProductNote = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid black;
  white-space: pre;
`

const DetailSection = styled.div`
  background: #1b1e27;
  margin: 10px 5px;
  border-radius: 10px;
  padding: 10px;
`

const ProductDetailType = styled.div`
  font-size: 16px;
  margin-top: 5px;
`

const ProductDetailContent = styled.div`
  margin: 5px 0;
`

const Mask = styled.div<{display: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => (props.display ? '2' : '-1')};
`

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

export const Product = () => {
  const {route, setRoute} = useContext(RouteContext)
  const [previewPopType, setPreviewPopType] = useState<'cart' | 'check' | ''>(
    ''
  )

  return (
    <Wrapper>
      <Topbar>
        <BackBtn onClick={() => console.log('#TODO')} />
        街口攻城獅官方商城
      </Topbar>
      <img src="./images/shirt_1.webp" style={{width: '100%'}} alt="item" />
      <TitleSection>
        <ProductName>{data.name}</ProductName>
        <ProductPrices>${data.prices}</ProductPrices>
        <DiscountInfoWapper>
          <DiscountInfo>街口結帳享九折優惠</DiscountInfo>
          <DiscountInfo>訂單滿399免運費</DiscountInfo>
        </DiscountInfoWapper>
        {data.note && <ProductNote>{data.note}</ProductNote>}
      </TitleSection>

      <DetailSection>
        <ProductDetailType>商品分類</ProductDetailType>
        <ProductDetailContent>{data.category}</ProductDetailContent>
        <div style={{borderTop: '1px solid black'}} />
        <ProductDetailType>商品描述</ProductDetailType>
        <ProductDetailContent>{data.description}</ProductDetailContent>
        <div style={{borderTop: '1px solid black'}} />
        <ProductDetailType>商品備註</ProductDetailType>
        <ProductDetailContent>{data.productNoteDetail}</ProductDetailContent>
      </DetailSection>

      <Navbar {...{setPreviewPopType}} />

      <Mask display={previewPopType !== ''} />
      <PreviewPop
        {...{
          previewPopType,
          setPreviewPopType
        }}
      />
    </Wrapper>
  )
}
