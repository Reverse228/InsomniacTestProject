import Link from "next/link";
import { BtnMore } from "../../BtnMore/BtnMore";
import * as S from "./styled";

export const Footer = () => (
  <S.Main>
    <S.Content>
      <S.TextParent>
        <S.TextContainer>
          <S.Name>About IDB Knowledge Advisory Services Center</S.Name>
          <S.Text>
            Sed aliquet eleifend dapibus. Aliquam erat volutpat. Aliquam erat
            volutpat. Curabitur ante lorem, vehicula ut lacinia cursus, posuere
            nec turpis. Praesent bibendum turpis ut leo porttitor, sit amet
            tempor turpis convallis. Nullam nec pharetra turpis, sed elementum
            arcu. Nullam venenatis sit amet justo id euismod. Nulla dictum
            ligula commodo venenatis luctus. Duis at enim suscipit, luctus nunc
            eu, varius lacus. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Mauris eu lacus congue,
            lacinia leo non, facilisis tortor. Nam ultricies enim at dolor
            porta, at malesuada lorem luctus. Maecenas id porttitor magna.
            Suspendisse aliquet semper nulla, in aliquam elit auctor quis.
            Vestibulum vel turpis nibh.
          </S.Text>
        </S.TextContainer>
        <BtnMore text="CONTACT US" href="#" />
      </S.TextParent>
      <S.TextParent>
        <S.TextContainer>
          <S.Name>About IDB</S.Name>
          <S.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            lectus nulla, mollis ac facilisis id, auctor sed justo. Sed ut
            consectetur massa. Fusce tristique semper justo, ac porta tortor
            consectetur a. Ut ullamcorper vel eros non efficitur. Fusce eu
            tortor ipsum. Suspendisse varius interdum dapibus. Suspendisse
            potenti.
          </S.Text>
        </S.TextContainer>
        <S.BottomText>
          © 2021 Insomniac Design Study <br />
          Website created by <u>Insomniac Design, Inc.</u>
        </S.BottomText>
      </S.TextParent>
    </S.Content>
  </S.Main>
);
