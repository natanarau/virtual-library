import React from "react";
import Star from "../../assets/imgs/star.png";
import StarFiled from "../../assets/imgs/star-filed.png";
import CoverNotFound from '../../assets/imgs/cover-not-found.png'

import { Container, InfoCol, StarContainer, CardContainer } from "./styles";

const BookCard = ({
  bookCover,
  title,
  description,
  publishedDate,
  infoLink,
  handleFavorite,
  isFavorite = false,
}) => {
  return (
    <CardContainer>
      <StarContainer onClick={handleFavorite}>
        {isFavorite ? <img src={StarFiled}></img> : <img src={Star}></img>}
      </StarContainer>
      <Container>
        <img src={bookCover ? bookCover : CoverNotFound} ></img>
        <InfoCol>
          <h1>{`${title.substring(0, 60)} ${
            title.length > 60 ? "..." : ""
          }`}</h1>
          {description && (
            <p>
              Descriçaõ:{" "}
              {`${description.substring(0, 80)} ${
                description.length > 80 ? "..." : ""
              }`}
            </p>
          )}
          {publishedDate && <h2>Publicado em: {publishedDate}</h2>}
          <button
            onClick={() => {
              window.open(infoLink, "_blank");
            }}
          >
            Ver Mais
          </button>
        </InfoCol>
      </Container>
    </CardContainer>
  );
};

export default BookCard;
