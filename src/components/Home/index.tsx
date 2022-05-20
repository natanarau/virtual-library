import bg from "../../assets/imgs/bg-home.svg";
import { useBookContext } from "../../hooks/useContextDataBook";
import { Favorite } from "../Favorite";
import { Search } from "../Search";
import * as S from "./styles";

export const Home = () => {
  const { favoriteBooks } = useBookContext();

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
          <S.HomeSearchContainer>
            <Search />
          </S.HomeSearchContainer>
          <S.HomeFavorite>
            {favoriteBooks.length > 0 && <Favorite />}
          </S.HomeFavorite>
        </S.HomeSearch>
        <S.HomeImgCard>
          <S.HomeImg force-cache src={bg} alt="bg" />
        </S.HomeImgCard>
      </S.HomeContent>
    </S.HomeContainer>
  );
};
