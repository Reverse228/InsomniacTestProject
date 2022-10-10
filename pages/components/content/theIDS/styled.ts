import styled from "styled-components";
import { colors, device, widths } from "../../../../styles/globalStyled";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: ${widths.standard};
  display: flex;
  align-items: center;

  &::before{
    position: absolute;
    content: " ";
    height: 576px;
    width: 50%;
    left: 0;
    background: ${colors.gray};
  }

  @media ${device.tablet}{
    width: ${widths.tablet};
    margin: 0 36px;

    &::before{
      height: 492px;
    }
  }

  @media ${device.mobile}{
    width: 100%;
    position: relative;
    flex-direction: column;
    justify-content: center;
    margin: 70px 0;

    &::before{
      height: 105%;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  flex-direction: column;
  padding: 100px;
  background: ${colors.red};
  color: ${colors.white};

  @media ${device.tablet}{
    padding: 60px;
  }

  @media ${device.mobile}{
    position: relative;
    width: 100%;
    padding: 50px 12px;
  }
`

export const Name = styled.h2`
  font-weight: 400;
  font-size: 50px;
  line-height: 60px;
  margin: 0;

  @media ${device.tablet}{
    font-style: italic;
    font-size: 30px;
  }
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  max-width: 500px;
  margin: 20px 0 0 0;

  @media ${device.tablet}{
    font-size: 16px;
    max-width: 400px;
  }

  @media ${device.mobile}{
    max-width: 100%;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  left: 100%;
  transform: translateX(-100%);

  & span {
    height: 100% !important;

    & img {
      object-fit: cover;

    }
  }

  @media ${device.tablet}{
    height: 600px;

    & span img {
      object-position: 0%;
    }
  }

  @media ${device.mobile}{
    height: auto;
    width: 100%;
    left: 0;
    transform: translateX(0);

    & span img {
      object-position: 100%;
    }
  }
`

