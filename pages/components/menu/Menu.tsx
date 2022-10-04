import { useState, FC, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { data } from "./mockData";
import { Props } from "./Menu.d";
import * as S from "./styled";
import { LinkCustom } from "../customBtn/CustomBtn";
import Link from "next/link";

export const Menu: FC = () => {
  const [linkState, setLinkState] = useState<number>(0);
  const [burgerState, setBurgerState] = useState<boolean>(false);

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Escape") {
        event.preventDefault();

        setBurgerState(false);
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <S.divMain>
      <Link href="#">
        <S.LogoLink>
          <Image src={Logo} />
        </S.LogoLink>
      </Link>
      <S.divMenu active={burgerState}>
        <S.MenuExit
          active={burgerState}
          onClick={() => {
            setBurgerState(false);
          }}
        />
        <S.MenuContentContainer>
          <S.LinksContainer>
            {data.map(({ id, name, link }: Props) => {
              return (
                <S.menuLink
                  key={id}
                  active={linkState === id}
                  onClick={() => {
                    setLinkState(id);
                  }}
                >
                  {name}
                </S.menuLink>
              );
            })}
          </S.LinksContainer>
          <LinkCustom text={"DOWNLOAD PDF"} link={"#"} />
        </S.MenuContentContainer>
      </S.divMenu>
      <S.Burger
        className={`hamburger hamburger--spin ${
          burgerState ? "is-active" : ""
        }`}
        type="button"
        onClick={() => {
          setBurgerState(!burgerState);
        }}
      >
        <S.BurgerBox className="hamburger-box">
          <S.BurgerInner className="hamburger-inner" active={burgerState} />
        </S.BurgerBox>
      </S.Burger>
    </S.divMain>
  );
};
