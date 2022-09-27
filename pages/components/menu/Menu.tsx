import { useState, FC } from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { LinkCustom } from "../customBtn/CustomBtn";
import { data } from "./mockData";
import { Props } from "./Menu.d";
import * as S from "./styled";

export const Menu: FC = () => {
  const [linkState, setLinkState] = useState<number>(0);

  return (
    <S.divMain>
      <Image src={Logo} />
      <S.divMenu>
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
      </S.divMenu>
      <LinkCustom text={"DOWNLOAD PDF"} link={"#"} />
    </S.divMain>
  );
};
