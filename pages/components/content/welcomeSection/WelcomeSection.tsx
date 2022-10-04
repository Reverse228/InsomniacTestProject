import Image from "next/image";
import React from "react";
import * as S from "./styled";
import WelcomeImage from "../../../../public/images/welcomeImage.png";

export const WelcomeSection = () => (
  <S.Main>
    <S.Content>
      <S.TextPart>
        <S.H1>Welcome to the insert some lorem copy here</S.H1>
        <S.H3>Vision, Learning, Collaboration.</S.H3>
        <S.P> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</S.P>
      </S.TextPart>
      <S.ImageContainer>
        <Image src={WelcomeImage} alt="welcome image" />
      </S.ImageContainer>
    </S.Content>
  </S.Main>
);
