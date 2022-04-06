import { useState } from "react";
import favorite from "../../assets/imgs/favorite.png";
import { useBookContext } from "../../hooks/useContextDataBook";
import * as S from "./styles";

export const Favorite = () => {
  const [setBusca, setBuscaState] = useState("");
  const { pages, books } = useBookContext();

  const handleSubmit = () => {
    console.log("teste");
  };
  return (
    <S.FavoriteButton onClick={handleSubmit} type="submit">
      <img src={favorite} alt="Favorite" />
      Ver favoritos
    </S.FavoriteButton>
  );
};
