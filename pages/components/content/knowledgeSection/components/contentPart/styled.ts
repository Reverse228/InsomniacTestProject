import styled from "styled-components";
import { colors, widths } from "../../../../../../styles/globalStyled";

export const Main = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: ${widths.standart};
`

export const TextPart = styled.div`
  max-width: 440px;
`

export const ImageContainer = styled.div`
  position: relative;
`

export const Title = styled.h3`
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
`

export const Subtitle = styled.h4`
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`

export const TextName = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`

export const BtnContainer = styled.div`
  position: relative;
`

export const BtnText = styled.p`
  color: ${colors.white}
`