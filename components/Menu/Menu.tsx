import { useState, FC, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { data } from "./mockData";
import * as S from "./styled";
import { LinkCustom } from "../LinkCustom/LinkCustom";
import Link from "next/link";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const Menu: FC = () => {
  const [linkState, setLinkState] = useState<number>(0);
  const [burgerState, setBurgerState] = useState<boolean>(false);
  const mediaQuery = useMediaQuery(1680);

  useEffect(() => {
    document.body.style.overflow = burgerState ? "hidden" : "auto";

    if (!mediaQuery) {
      setBurgerState(false);
    }
  }, [burgerState, mediaQuery]);

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
    <S.Main>
      <Link href="#">
        <S.LogoLink>
          <Image src={Logo} />
        </S.LogoLink>
      </Link>
      <S.Menu $active={burgerState}>
        <S.Backdrop
          $active={burgerState}
          onClick={() => {
            setBurgerState(false);
          }}
        />
        <S.MenuContent>
          <S.LinksContainer>
            {data.map(({ id, name, link }) => {
              return (
                <S.Link
                  key={id}
                  $active={linkState === id}
                  onClick={() => {
                    setLinkState(id);
                  }}
                >
                  {name}
                </S.Link>
              );
            })}
          </S.LinksContainer>
          <LinkCustom text={"DOWNLOAD PDF"} link={"#"} />
        </S.MenuContent>
      </S.Menu>
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
          <S.BurgerInner className="hamburger-inner" />
        </S.BurgerBox>
      </S.Burger>
    </S.Main>
  );
};
