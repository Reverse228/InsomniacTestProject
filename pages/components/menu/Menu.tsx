import { useState, FC } from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { data } from "./mockData";
import { Props } from "./Menu.d";
import * as S from "./styled";
import { LinkCustom } from "../customBtn/CustomBtn";

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
        <LinkCustom text={"DOWNLOAD PDF"} link={"#"} />
      </S.divMenu>
    </S.divMain>
  );
};
