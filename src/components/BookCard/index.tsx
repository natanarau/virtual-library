import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import CoverNotFound from "../../assets/imgs/coverNotFound.png";
import * as S from "./styles";

type bookCardProps = {
  bookCover: string;
  title: string;
  description: string;
  publishedDate: string;
  infoLink: string;
  handleFavorite(): void;
  isFavorite: boolean;
};

export const BookCard: React.FC<bookCardProps> = ({
  bookCover,
  title,
  description,
  publishedDate,
  infoLink,
  handleFavorite,
  isFavorite,
}) => {
  return (
    <S.BookCardContainer>
      <S.BookCard>
        <S.BookCardInfo>
          <S.BookCardInfoDetails>
            <S.BookCardTitle>
              {title &&
                `${title.substring(0, 35)} ${title.length > 35 ? "..." : ""}`}
            </S.BookCardTitle>
            <S.BookCardPublished>
              Publicado em: {publishedDate}
            </S.BookCardPublished>
            <S.BookCardDescription>
              <span>Descrição:</span>
              {description &&
                `${description.substring(0, 160)} ${
                  description.length > 160 ? "..." : ""
                }`}
            </S.BookCardDescription>
          </S.BookCardInfoDetails>
          <S.BookCover
            src={bookCover ? bookCover : CoverNotFound}
            alt={title}
          />
        </S.BookCardInfo>
        <S.Bottons>
          <S.BottonSeeMore
            onClick={() => {
              window.open(infoLink, "_blank");
            }}
          >
            Ver Mais <ArrowForwardIcon />
          </S.BottonSeeMore>
          <S.BottonFavorite onClick={handleFavorite}>
            {isFavorite ? (
              <FavoriteIcon color="secondary" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </S.BottonFavorite>
        </S.Bottons>
      </S.BookCard>
    </S.BookCardContainer>
  );
};
