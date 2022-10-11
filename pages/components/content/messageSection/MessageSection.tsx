import Image from "next/image";
import Link from "next/link";
import ContentImg from "../../../../public/images/contentImg.png";
import * as S from "./styled";

export const MessageSection = () => {
  return (
    <S.Main>
      <S.ImageGrid>
        <S.ImageContainer>
          <Image src={ContentImg} alt="Picture of the author" />
        </S.ImageContainer>
      </S.ImageGrid>
      <S.Contact>
        <S.h4>Lord Voldemort</S.h4>
        <S.pContact>
          Vice-President for Knowledge Management and Sustainable Development
          Activities
        </S.pContact>
        <Link href="#">
          <S.mail>lordVoldemort@example.com</S.mail>
        </Link>
      </S.Contact>
      <S.Info>
        <S.h2>IDS’s Message</S.h2>
        <S.h3>
          Knowledge management has always been intertwined with the work of
          Insomniac Design Study (IDS).
        </S.h3>
        <S.pInfo>
          Sed aliquet eleifend dapibus. Aliquam erat volutpat. Aliquam erat
          volutpat. Curabitur ante lorem, vehicula ut lacinia cursus, posuere
          nec turpis. Praesent bibendum turpis ut leo porttitor, sit amet tempor
          turpis convallis. Nullam nec pharetra turpis, sed elementum arcu.
          Nullam venenatis sit amet justo id euismod. Nulla dictum ligula
          commodo venenatis luctus. Duis at enim suscipit, luctus nunc eu,
          varius lacus. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Mauris eu lacus congue, lacinia
          leo non, facilisis tortor. Nam ultricies enim at dolor porta, at
          malesuada lorem luctus.
        </S.pInfo>
      </S.Info>
    </S.Main>
  );
};
