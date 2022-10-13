import Image from "next/image";
import { FC } from "react";
import { Props } from "./DynamicCircle.d";
import { data } from "./mockData";
import * as S from "./styled";
import { SpaceImageSvg } from "../../../../public/svg/SpaceImageSvg";

export const DynamicCircle: FC<Props> = ({ slideId, $color }) => (
  <S.Main>
    <S.BigCircle $color={$color}>
      <S.ContentCircle $color={$color}>
        <S.ImageContainer $color={$color}>
          <SpaceImageSvg />
        </S.ImageContainer>
        {data.map(
          ({ id, name }) =>
            slideId === id && (
              <S.Content key={id}>
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
