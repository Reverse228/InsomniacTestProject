import { FC } from "react";
import Link from "next/link";

import { Props } from "./BtnMore.d";

import * as S from "./styled";
import { ArrowSvg } from "../../../public/svg/ArrowSvg";

export const BtnMore: FC<Props> = ({ text, href, $color }) => (
  <Link href={href}>
    <S.Link $padding="15px 25px 15px 0" $color={$color ? $color : "white"}>
      {text}
      <ArrowSvg $color={$color} />
    </S.Link>
  </Link>
);
