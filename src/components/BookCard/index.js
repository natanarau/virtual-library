import React from 'react';

import { Container } from './styles';

import { Container2 } from './styles';
const BookCard = ({
    bookCover,
    title,
    description,
    publishedDate
}) => {
  return (
    <Container>
        <img src={bookCover}></img>
          <Container2>
          <h1>{title}</h1>
          <p>Descriçaõ: {description}</p>
          <h2>Publicado em: {publishedDate}</h2>
          <button>Ver Mais</button>
        </Container2>
    </Container>
  );
};

export default BookCard;
