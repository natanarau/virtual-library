import { useState } from "react";
import favorite from "../../assets/imgs/favorite.png";
import { useBookContext } from "../../hooks/useContextDataBook";
import * as S from "./styles";

import { Link } from "react-router-dom";
import { FavoriteBook } from "../../pages/FavoriteBook/index";
export const Favorite = () => {
  const [setBusca, setBuscaState] = useState("");
  const { pages, books, favoriteBooks } = useBookContext();

  const handleSubmit = () => {
    console.log(favoriteBooks, "aaaaaaaaaaaaaaaaaaaaa");
    return <FavoriteBook />;
  };
  return (
    <>
      <Link to="/favorite-book">
        <S.FavoriteButton type="submit">
          <img src={favorite} alt="Favorite" />
          Ver favoritos
        </S.FavoriteButton>
      </Link>
    </>
  );
};
