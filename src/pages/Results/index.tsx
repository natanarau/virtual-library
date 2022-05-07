import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import { BookCard } from "../../components/BookCard";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { useBookContext } from "../../hooks/useContextDataBook";
import * as S from "./styles";

export const Result = () => {
  const {
    books,
    favoriteBooks,
    setFavoriteBooks,
    loading,
    setCurrentPage,
    currentPage,
    pages,
  } = useBookContext();

  const handleFavorite = (book: any) => {
    const index = favoriteBooks.findIndex((item) => item.id === book.id);
    if (index === -1) {
      setFavoriteBooks([...favoriteBooks, book]);
    } else {
      let removeFavorite = favoriteBooks.filter((item) => item.id !== book.id);
      setFavoriteBooks(removeFavorite);
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  const widthW = window.screen.width;
  const style = S.useStyles();
  return (
    <S.Container>
      <Header />
      <S.ContainerResult>
        <S.Breadcrumbs>
          <Link to="/">Home</Link>
          <p>{">"}</p>
          <p id="active">
            <SearchIcon />
            Pesquisa
          </p>
        </S.Breadcrumbs>
        <S.Search>
          <Search />
          <S.ResultContainer>
            {loading && (
              <S.Progress>
                <CircularProgress />
              </S.Progress>
            )}
            {books?.map((book) => (
              <BookCard
                key={book.id}
                bookCover={book.volumeInfo?.imageLinks?.thumbnail}
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
            ))}
            {(books?.length === 0 || books === undefined) && !loading && (
              <S.Error>
                <p>
                  Não encontramos nenhum livro com esse título, tente novamente!
                </p>
              </S.Error>
            )}
            {pages > 1 && (
              <Pagination
                count={pages}
                page={currentPage}
                onChange={handleChange}
                classes={{ root: style.root }}
                siblingCount={0}
                size={widthW < 300 ? "small" : "large"}
              />
            )}
          </S.ResultContainer>
        </S.Search>
      </S.ContainerResult>
    </S.Container>
  );
};
