import Image from "next/image";
import PlusSvg from "../../../../public/svg/PlusSvg.svg";
import * as S from "./styles";

export const AddMessageInfo = () => (
  <S.Main>
    <S.ImageContainer>
      <Image src={PlusSvg} />
    </S.ImageContainer>
    <S.Text>
      Duis at enim suscipit, luctus nunc eu, varius lacus. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Mauris eu lacus congue ...
    </S.Text>
  </S.Main>
);
