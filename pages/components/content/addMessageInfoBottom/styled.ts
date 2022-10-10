import styled from "styled-components";
import { device, widths } from "../../../../styles/globalStyled";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  width: ${widths.standard};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 80px 0;
  padding: 0 113px 0 105px;

  @media ${device.tablet}{
    width: ${widths.tablet};
    padding: 0;
    margin: 40px 0;
  }

  @media ${device.mobile}{
    width: 100%;
    margin: 25px 0 25px 12px;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  max-width: 640px;
  margin: 0;

  @media ${device.tablet}{
    max-width: 400px;
    font-size: 18px;
    line-height: 27px;
    font-style: italic;
  }

  @media ${device.mobile}{
    max-width: 100%;
    margin-bottom: 40px;
  }
`