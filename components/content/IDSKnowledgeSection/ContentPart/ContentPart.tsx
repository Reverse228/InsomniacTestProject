import { FC } from "react";
import Image from "next/image";

import { Props } from "./Content.d";

import { data } from "./mockData";

import * as S from "./styled";
import { BtnMore } from "../../../BtnMore/BtnMore";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { timeLineBtns } from "../mockData";

export const ContentPart: FC<Props> = ({ slideId }) => {
  const isBreakpoint = useMediaQuery(768);

  return (
    <S.Main>
      {data.map(
        ({ id, img, title, subtitle, textName, text, link, contentImg }) =>
          !isBreakpoint
            ? slideId === id && (
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
            : (id === 1 || id === 2) && (
                <S.Content key={id}>
                  <S.IntervalContainer>
                    <S.Line />
                    <S.TextPoint>
                      <S.BtnText>
                        {timeLineBtns.map((btn) => btn.id === id && btn.text)}
                      </S.BtnText>
                      <S.Point />
                    </S.TextPoint>
                  </S.IntervalContainer>
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
                </S.Content>
              )
      )}
    </S.Main>
  );
};
