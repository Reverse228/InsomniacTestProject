import { FC } from "react";
import Link from "next/link";
import * as S from "./styled";

type Props = {
  text: string;
  link: string;
};

export const LinkCustom: FC<Props> = ({ text, link }) => (
  <Link href={link}>
    <S.a>{text}</S.a>
  </Link>
);
