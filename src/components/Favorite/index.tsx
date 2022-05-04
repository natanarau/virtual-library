import { Link } from "react-router-dom";
import favorite from "../../assets/imgs/favorito.png";
import * as S from "./styles";

export const Favorite = () => {
  return (
    <>
      <Link to="/favorite-book">
        <S.FavoriteButton type="submit">
          <img src={favorite} alt="Favorite" />
          <p>Ver favoritos</p>
        </S.FavoriteButton>
      </Link>
    </>
  );
};
