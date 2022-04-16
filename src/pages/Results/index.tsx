import { BookCard } from "../../components/BookCard";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { useBookContext } from "../../hooks/useContextDataBook";
import * as S from "./styles";

export const Result = () => {
  const { books, favoriteBooks, setFavoriteBooks } = useBookContext();

  const handleFavorite = (book: any) => {
    const index = favoriteBooks.findIndex((item) => item.id === book.id);
    if (index === -1) {
      setFavoriteBooks([...favoriteBooks, book]);
    } else {
      let removeFavorite = favoriteBooks.filter((item) => item.id !== book.id);
      setFavoriteBooks(removeFavorite);
    }
  };

  return (
    <S.Container>
      <Header />
      <S.ContainerResult>
        <S.Search>
          <Search />
          <S.ResultContainer>
            {books.map((book) => (
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
            {books.length === 0 && (
              <p>
                Não encontramos nenhum livro com esse título, tente novamente!
              </p>
            )}
          </S.ResultContainer>
        </S.Search>
      </S.ContainerResult>
    </S.Container>
  );
};
