import Image from "next/image";
import React from "react";
import * as S from "./styled";
import TheIDSImage from "../../../public/images/theIDSImage.png";

export const IDS = () => (
  <S.Main>
    <S.Content>
      <S.TextContainer>
        <S.Name>The IDS</S.Name>
        <S.Text>
          Donec tristique dolor non lectus tincidunt, a lacinia libero suscipit.
          Quisque ultrices ex lectus, non lobortis nibh volutpat at. Vivamus
          auctor urna at nulla vulputate ultricies. Aliquam dictum est elit, a
          imperdiet ante sollicitudin et. Suspendisse accumsan non mauris vitae
          cursus. Nullam posuere dignissim arcu, quis dictum quam tempus eget.
          Sed scelerisque tortor eu hendrerit aliquam. Nullam maximus auctor
          vulputate. Maecenas in finibus metus.
        </S.Text>
      </S.TextContainer>
      <S.ImageContainer>
        <Image src={TheIDSImage} />
      </S.ImageContainer>
    </S.Content>
  </S.Main>
);
