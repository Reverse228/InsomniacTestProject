import { FC } from "react";
import Image from "next/image";

import { Props } from "./Content";

import { data } from "./mockData";

import * as S from "./styled";
import { BtnMore } from "../../../btnMore/BtnMore";

export const ContentPart: FC<Props> = ({ slideId }) => {
  return (
    <S.Main>
      {data.map(
        ({ id, img, title, subtitle, textName, text, link, contentImg }) =>
          slideId === id && (
            <S.Content key={id}>
              <S.TextPart>
                <S.ImageContainer>
                  <Image src={img} />
                </S.ImageContainer>
                <S.Title>{title}</S.Title>
                <S.Subtitle>{subtitle}</S.Subtitle>
                <S.Text>
                  <strong>{textName}</strong>
                  {text}
                </S.Text>
                <BtnMore text={"READ MORE"} href={link} />
              </S.TextPart>
              <S.ImagePart>
                <S.ImageContent>
                  <S.ImageHeader>
                    <S.Decor />
                    <S.Decor />
                    <S.Decor />
                  </S.ImageHeader>
                  <S.ImageContentContainer>
                    <Image src={contentImg} />
                  </S.ImageContentContainer>
                </S.ImageContent>
              </S.ImagePart>
            </S.Content>
          )
      )}
    </S.Main>
  );
};
