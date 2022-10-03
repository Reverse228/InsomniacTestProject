import React from "react";
import * as S from "./styled";

const AboutSection = () => (
  <S.Main>
    <div />
    <S.Content>
      <S.Title>
        <S.H3>ABOUT</S.H3>
        <S.H2>IDS’s Knowledge Management in Action</S.H2>
      </S.Title>
      <S.Info>
        <S.ImageContainer />
        <S.Description>
          <S.DescP>
            Sed metus ligula, auctor eget sagittis eu, elementum vel est. Nam in
            dolor bibendum, mollis felis eget, ullamcorper odio. Praesent nunc
            nisi, rutrum mollis cursus vel, aliquet a nunc. Sed a varius sapien.
            Nulla et massa faucibus, pharetra felis at, aliquam neque. Maecenas
            volutpat malesuada erat eu finibus. Proin in magna id massa pharetra
            rutrum eu nec est. Etiam ultrices tortor sapien, placerat ultrices
            nisl viverra non.
          </S.DescP>
        </S.Description>
      </S.Info>
    </S.Content>
    <div />
  </S.Main>
);

export default AboutSection;
