import React from 'react';
import BookCard from '../../components/BookCard';
import api from '../../services/api'

import { Container } from './styles';

const LandingPage = () => {

  const [books, setBooks] = React.useState([]);

  const getBooks = () => {
    const ENDPOINT = `volumes?q=search+harry+potter` 
    api.get(ENDPOINT).then((response) => {
      console.log(response.data.items)
      setBooks(response.data.items);
    }).catch((error) => {
      console.log(error)
    })
  }

  React.useEffect(getBooks,[])

  return (
    <Container>
      {books.map((book) => (
        <BookCard 
          bookCover={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"}
          title={book.volumeInfo.title.substring(0,60)}
          description={book.volumeInfo.description.substring(0,80)}
          publishedDate={book.volumeInfo.publishedDate} 
        />
      ))}
    </Container>
  );
};

export default LandingPage;