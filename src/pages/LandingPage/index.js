import React from 'react';
import BookCard from '../../components/BookCard';
import api from '../../services/api'

import { Container, Column } from './styles';

const LandingPage = () => {

  const [books, setBooks] = React.useState([]);

  const getBooks = () => {
      const ENDPOINT = `volumes?q=swanny&maxResults=40&key=AIzaSyBtnIxwIJ0tIPwOnh1lzO-FZw54oBB6zRU`;
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
      <div className="row">
        {books.map((book) => (
         <Column className="col-12 col-lg-6 col-xxl-4">
            <BookCard 
              bookCover={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"}
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
              publishedDate={book.volumeInfo.publishedDate} 
              infoLink={book.volumeInfo.infoLink} 
            />
          </Column>
        ))}
      </div>
    </Container>
  );
};

export default LandingPage;