import React from 'react'
import styled from 'styled-components'

type Props = {
    text: string,
    link?: string
}

const BtnEl = styled.div`
    background: #E76ECE;
    padding: 15px 20px;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    display: flex;
`

const BtnA = styled.a`
    color: #FFFFFF;
    font-size: 16px;
    underline: none
`

const CustomBtn: React.FC<Props> = ({text, link}) => {
  return (
    <BtnEl>
        <BtnA href="">{text}</BtnA>
    </BtnEl>
  )
}

export default CustomBtn