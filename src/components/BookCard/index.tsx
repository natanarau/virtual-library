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
  let year = publishedDate?.split("-")[0];
  if (
    publishedDate === "" ||
    publishedDate === null ||
    publishedDate === undefined
  ) {
    year = "";
  }

  return (
    <S.BookCardContainer>
      <S.BookCard>
        <S.BookCardInfo>
          <S.BookCover
            src={bookCover ? bookCover : CoverNotFound}
            alt={title}
          />
          <S.BookCardInfoDetails>
            <S.BookCardPublished>{year}</S.BookCardPublished>
            <S.BookCardTitle>
              {title &&
                `${title.substring(0, 25)} ${title.length > 25 ? "..." : ""}`}
            </S.BookCardTitle>

            <S.BookCardDescription>
              {description &&
                `${description.substring(0, 150)} ${
                  description.length > 150 ? "..." : ""
                }`}
            </S.BookCardDescription>
          </S.BookCardInfoDetails>
        </S.BookCardInfo>
        <S.Bottons>
          <S.BottonSeeMore
            onClick={() => {
              window.open(infoLink, "_blank");
            }}
          >
            Ver Mais
          </S.BottonSeeMore>
          <S.BottonFavorite onClick={handleFavorite}>
            {isFavorite ? (
              <FavoriteIcon color="secondary" />
            ) : (
              <FavoriteBorderIcon style={{ color: "#6798A0" }} />
            )}
          </S.BottonFavorite>
        </S.Bottons>
      </S.BookCard>
    </S.BookCardContainer>
  );
};
