import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import ArrowSvg from "../../../public/svg/arrowSvg.svg";

import { Props } from "./BtnMore.d";

import * as S from "./styled";

export const BtnMore: FC<Props> = ({ text, href, $padding }) => (
  <Link href={href}>
    <S.Link $padding="15px 25px 15px 0">
      {text}
      <S.ImageContainer>
        <Image src={ArrowSvg} />
      </S.ImageContainer>
    </S.Link>
  </Link>
);
