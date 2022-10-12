import { LinkCustom } from "../../LinkCustom/LinkCustom";
import * as S from "./styled";

export const AddMessage = () => (
  <S.Main>
    <S.Content>
      <S.Text>
        To learn even more about IDS’s knowledge solutions, check out IDS’s
        TED-x style talks and podcasts.
      </S.Text>
      <LinkCustom text="VIEW PODCASTS" link="#" />
    </S.Content>
  </S.Main>
);
