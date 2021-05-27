import React from 'react';

import { Container, InfoCol } from './styles';

const BookCard = ({
    bookCover,
    title,
    description,
    publishedDate,
    infoLink
}) => {
  return (
    <Container>
        <img src={bookCover}></img>
          <InfoCol>
          <h1>{title.substring(0,60)}</h1>
          {description && 
            <p>Descriçaõ: {description.substring(0,80)}</p>
          }
          {publishedDate &&
            <h2>Publicado em: {publishedDate}</h2>
          }
          <button onClick={() => {window.open(infoLink, "_blank")}} >Ver Mais</button>
        </InfoCol>
    </Container>
  );
};

export default BookCard;
