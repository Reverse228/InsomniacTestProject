import Image from "next/image";
import { FC } from "react";
import { Props } from "./DynamicCircle.d";
import { data } from "./mockData";
import * as S from "./styled";

export const DynamicCircle: FC<Props> = ({ slideId, $color }) => (
  <S.Main>
    <S.BigCircle $color={$color}>
      <S.ContentCircle $color={$color}>
        {data.map(
          ({ id, name, Image }) =>
            slideId === id && (
              <S.Content key={id}>
                <S.ImageContainer $color={$color}>
                  <Image />
                </S.ImageContainer>
                <S.Text>{name}</S.Text>
                <S.Text>{id} / 12</S.Text>
              </S.Content>
            )
        )}
      </S.ContentCircle>
    </S.BigCircle>
    <S.RotateCircle $color={$color} />
  </S.Main>
);
