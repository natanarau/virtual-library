import { Link } from "react-router-dom";
import { BookCard } from "../../components/BookCard";
import { Favorite } from "../../components/Favorite";
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
      <S.Result>
        <S.ResultHeader>
          <S.ResultTitle>
            <Link to="/" style={S.linkStyle}>
              <p>Biblioteca Virtual</p>
            </Link>
          </S.ResultTitle>
          <S.ResultMenu>
            <Favorite />
          </S.ResultMenu>
        </S.ResultHeader>
      </S.Result>
      <S.Search>
        <Search />

        <S.ResultContainer>
          {books.map((book) => (
            <BookCard
              key={book.id}
              bookCover={""}
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
        </S.ResultContainer>
      </S.Search>
    </S.Container>
  );
};
