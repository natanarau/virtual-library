import bg from "../../assets/imgs/bg-home.svg";
import { Search } from "../Search";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeContent>
        <S.HomeSearch>
          <S.HomeTitle>Biblioteca Virtual</S.HomeTitle>
          <S.HomePhrase>
            “Ler é a possibilidade de viajar para aqueles que não podem pagar as
            viagens”.
          </S.HomePhrase>
          <S.HomeAuthor>- Francis de Croisset</S.HomeAuthor>
          <Search />
        </S.HomeSearch>
        <S.HomeImgCard>
          <S.HomeImg src={bg} alt="bg" />
        </S.HomeImgCard>
      </S.HomeContent>
    </S.HomeContainer>
  );
};
