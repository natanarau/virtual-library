import bg from "../../assets/imgs/bg-home.svg";
import { Search } from "../../components/Search";
import * as S from "./styles";

export const NotFound = () => {
  return (
    <S.NotFoundContainer>
      <S.NotFoundContent>
        <S.NotFound>
          <S.NotFoundTitle>Página não encontrada</S.NotFoundTitle>
          <Search />
        </S.NotFound>
        <S.NotFoundImgCard>
          <S.NotFoundImg src={bg} alt="bg" />
        </S.NotFoundImgCard>
      </S.NotFoundContent>
    </S.NotFoundContainer>
  );
};
