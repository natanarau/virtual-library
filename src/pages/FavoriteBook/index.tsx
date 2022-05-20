import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { BookCard } from "../../components/BookCard";
import { Header } from "../../components/Header";
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
      <Header />
      <S.ContainerResult>
        <S.Breadcrumbs>
          <Link to="/">Home</Link>
          <p>{">"}</p>
          <p id="active">
            <FavoriteIcon />
            Favoritos
          </p>
        </S.Breadcrumbs>

        <S.Search>
          <Search />
          <S.FavoriteContainer>
            {favoriteBooks.length > 0 && (
              <S.FavoriteBookContainer>
                {favoriteBooks.map((book) => {
                  return (
                    <BookCard
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
                  );
                })}
              </S.FavoriteBookContainer>
            )}
          </S.FavoriteContainer>
          {favoriteBooks.length === 0 && (
            <S.FavoriteError>
              <p>Você não favoritou nenhum livro</p>
            </S.FavoriteError>
          )}
        </S.Search>
      </S.ContainerResult>
    </S.Container>
  );
};
