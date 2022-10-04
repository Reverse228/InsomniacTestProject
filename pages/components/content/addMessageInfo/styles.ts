import styled from "styled-components";
import { device } from "../../../../styles/globalStyled";

export const Main = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  @media ${device.tablet}{
    margin-top: 50px;
  }
  @media ${device.mobile}{
    max-width: 445px;
    flex-direction: column;
    padding-left: 12px;
  }
  @media ${device.minMobile}{
    max-width: 310px;
  }
`

export const ImageContainer = styled.div`
  margin-top: 10px;
  @media ${device.tablet}{
    width: 35px;
    height: 35px;
    margin-top: 5px;
  }
  @media ${device.mobile}{
    width: 30px;
    height: 30px;
    margin: 0;
  }
`

export const Text = styled.p`
  max-width: 760px;
  margin: 0 0 0 50px;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  @media ${device.tablet}{
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    max-width: 500px;
    margin: 0 0 0 35px;
  }
  @media ${device.mobile}{
    margin: 20px 0 0 0;
    line-height: 27px;
  }
`


