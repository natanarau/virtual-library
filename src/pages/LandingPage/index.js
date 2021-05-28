import React from "react";
import BookCard from "../../components/BookCard";
import api from "../../services/api";
import ReactPaginate from "react-paginate";

import { Container, Column, Header, CustomForm } from "./styles";

const LandingPage = () => {
  const [books, setBooks] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [pages, setPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);

  const getBooks = (currentPage=0) => {
    setCurrentPage(currentPage)
    const ENDPOINT = `volumes?q=${search}&maxResults=12&startIndex=${currentPage}&key=AIzaSyBtnIxwIJ0tIPwOnh1lzO-FZw54oBB6zRU`;
    api
      .get(ENDPOINT)
      .then((response) => {
        console.log(response.data.items);
        setPages(Math.ceil(response.data.totalItems / 12));
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(getBooks, []);

  const handleChange = (event) => {
    //this.setState({value: event.target.value});
    console.log(event.target.value);
    setSearch(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks();
  }  

  const handlePageClick = (data) => {
    getBooks(data.selected);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Header>
        <div><p>Biblioteca Virtual</p></div>
        <div>
          <CustomForm onSubmit={handleSubmit}>
            <input placeholder="O que esta procurando?" type="text" value={search} onChange={handleChange} />
            <button type="submit">Pesquisar</button>
          </CustomForm>
        </div>
      </Header>
      <div className="row">
        {books.map((book) => (
          <Column className="col-12 col-lg-6 col-xxl-4">
            <BookCard
              bookCover={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "https://books.google.com.br/googlebooks/images/no_cover_thumb.gif"
              }
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
              publishedDate={book.volumeInfo.publishedDate}
              infoLink={book.volumeInfo.infoLink}
            />
          </Column>
        ))}
      </div>
      {pages > 1 && (
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
