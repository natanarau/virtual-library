import React from 'react';

import { Container } from './styles';

import { Container2 } from './styles';
const BookCard = ({
    bookCover,
    title,
    description,
    publicationDate
}) => {
  return (
    <Container>
        <img src="https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"></img>
          <Container2>
          <h1>{title}</h1>
          <p>Descriçaõ: Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using '....</p>
          <h2>Publicado em: 26/05/2021</h2>
          <button>Ver Mais</button>
        </Container2>
    </Container>
  );
};

export default BookCard;
