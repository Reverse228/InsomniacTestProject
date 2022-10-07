import { useEffect, useState } from "react";
import { useRepeatInterval } from "../../../../hooks/useRepeatInterval";
import { colors } from "../../../../styles/globalStyled";
import { BtnMore } from "../../btnMore/BtnMore";
import { DynamicCircle } from "./dynamicCircle/DynamicCircle";
import { data } from "./mockData";
import * as S from "./styled";

export const SpaceSection = () => {
  const repeatCount = useRepeatInterval(12, 5000);
  const [randomColor, setRandomColor] = useState(0);

  useEffect(() => {
    setRandomColor(Math.floor(Math.random() * Object.keys(colors).length));
  }, [repeatCount]);

  return (
    <S.Main>
      <S.Content>
        {data.map(
          ({ id, name, text, link }) =>
            repeatCount === id && (
              <S.TextContainer key={id}>
                <S.Name>{name}</S.Name>
                <S.Text>{text}</S.Text>
                <BtnMore text={"VIEW ALL"} href={link} $color={colors.pink} />
              </S.TextContainer>
            )
        )}
        <DynamicCircle
          slideId={repeatCount}
          $color={Object.values(colors)[randomColor]}
        />
      </S.Content>
    </S.Main>
  );
};
