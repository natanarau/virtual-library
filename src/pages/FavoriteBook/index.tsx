import { Link } from "react-router-dom";
import { BookCard } from "../../components/BookCard";
import { Search } from "../../components/Search";

import { useBookContext } from "../../hooks/useContextDataBook";
import * as S from "./styles";

export const FavoriteBook = () => {
  const { favoriteBooks, setFavoriteBooks } = useBookContext();
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
    <S.Container id="favorite-book">
      <S.FavoriteBook>
        <S.FavoriteBookHeader>
          <S.FavoriteBookTitle>
            <Link to="/" style={S.linkStyle}>
              <p>Biblioteca Virtual</p>
            </Link>
          </S.FavoriteBookTitle>
        </S.FavoriteBookHeader>
      </S.FavoriteBook>
      <S.Search>
        <Search />

        {favoriteBooks.length > 0 && (
          <S.FavoriteBookContainer>
            {favoriteBooks.map((book) => {
              return (
                <BookCard
                  bookCover={book.volumeInfo.bookCover}
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
              );
            })}
          </S.FavoriteBookContainer>
        )}

        {favoriteBooks.length === 0 && (
          <S.FavoriteError>
            <p>Você não favoritou nenhum livro</p>
          </S.FavoriteError>
        )}
      </S.Search>
    </S.Container>
  );
};
