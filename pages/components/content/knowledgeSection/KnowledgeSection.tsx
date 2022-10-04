import { useState } from "react";
import { ContentPart } from "./components/contentPart/ContentPart";
import { InfoPart } from "./components/infoPart/InfoPart";
import { Props } from "./Knowledge";
import { timeLineBtns } from "./mockData";
import * as S from "./styled";

export const KnowledgeSection = () => {
  const [btnState, setBtnState] = useState<number>(0);

  return (
    <S.Main>
      <InfoPart />
      <S.TimeLine>
        {timeLineBtns.map((btn: Props) => (
          <S.BtnContainer key={btn.id}>
            <S.Line
              last={btn.id === timeLineBtns.length}
              first={btn.id === 2}
              active={btnState < btn.id}
            />
            <S.TextPoint
              onClick={() => {
                setBtnState(btn.id);
              }}
            >
              <S.Point active={btnState === btn.id} />
              <S.BtnText>{btn.text}</S.BtnText>
            </S.TextPoint>
          </S.BtnContainer>
        ))}
      </S.TimeLine>
      {/* <ContentPart slideId={btnState} /> */}
    </S.Main>
  );
};
