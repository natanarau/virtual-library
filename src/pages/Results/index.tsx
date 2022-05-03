import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";
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
    console.log(value, "value clicado");
  };
  console.log(pages, "quantidade de paginas");
  console.log(currentPage, "pagina atual");
  return (
    <S.Container>
      <Header />
      <S.ContainerResult>
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
            {books?.length === 0 ||
              (books?.length === undefined && (
                <p>
                  Não encontramos nenhum livro com esse título, tente novamente!
                </p>
              ))}
            <Pagination
              count={pages}
              page={currentPage}
              onChange={handleChange}
            />
          </S.ResultContainer>
        </S.Search>
      </S.ContainerResult>
    </S.Container>
  );
};
