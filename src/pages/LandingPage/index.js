import React from "react";
import { BookCard } from "../../components/BookCard";
import api from "../../services/api";
import ReactPaginate from "react-paginate";

import { Container, Column, Header, CustomForm } from "./styles";

const LandingPage = () => {
  const [books, setBooks] = React.useState([]);
  const [favoriteBooks, setFavoriteBooks] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [pages, setPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);

  const getBooks = (currentPage = 0) => {
    setCurrentPage(currentPage);
    const ENDPOINT = `volumes?q=${search}&maxResults=12&startIndex=${
      currentPage * 12
    }`;
    api
      .get(ENDPOINT)
      .then((response) => {
        // console.log(response.data.items);
        // console.log(response.data.totalItems);
        setPages(Math.ceil(response.data.totalItems / 24));
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks();
  };

  const handlePageClick = (data) => {
    getBooks(data.selected);
    window.scrollTo(0, 0);
  };

  const handleFavorite = (book) => {
    const index = favoriteBooks.findIndex((item) => item.id === book.id);
    // console.log(index);

    if (index != -1) {
      let favbooks = favoriteBooks;
      favbooks.splice(index, 1);
      getBooks(currentPage);
      if (books === favoriteBooks) {
        setFavoriteBooks(favbooks);
        setBooks([]);
        setTimeout(() => {
          setBooks(favbooks);
        }, 0);
      }
    } else {
      let favorites = favoriteBooks;
      favorites.push(book);
      setFavoriteBooks(favorites);
      getBooks(currentPage);
    }
  };

  const handleShowFavorites = () => {
    setBooks(favoriteBooks);
    setSearch("");
  };

  return (
    <Container>
      <Header>
        <div>
          <p>Biblioteca Virtual</p>
        </div>
        <div>
          <CustomForm onSubmit={handleSubmit}>
            <input
              placeholder="O que esta procurando?"
              type="text"
              value={search}
              onChange={handleChange}
            />
            <button type="submit">Pesquisar</button>
            <button onClick={handleShowFavorites}>Favoritos</button>
          </CustomForm>
        </div>
      </Header>
      <div className="row">
        {books.map((book) => (
          <Column className="col-12 col-lg-6 col-xxl-4" key={book.id}>
            <BookCard
              bookCover={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : ""
              }
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
              publishedDate={book.volumeInfo.publishedDate}
              infoLink={book.volumeInfo.infoLink}
              handleFavorite={() => handleFavorite(book)}
              isFavorite={
                favoriteBooks.filter((elm) => {
                  return elm.id === book.id;
                }).length > 0
              }
            />
          </Column>
        ))}
      </div>
      {books !== favoriteBooks && pages > 1 && books.length > 0 && (
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Próxima"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          forcePage={currentPage}
          pageCount={pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page"}
          pageLinkClassName={"page-button"}
          activeLinkClassName={"active-page-button"}
          breakLinkClassName={"page-button"}
          breakClassName={"page"}
          nextClassName={"next-button"}
          previousClassName={"previous-button"}
        />
      )}
    </Container>
  );
};

export default LandingPage;
