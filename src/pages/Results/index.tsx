import { BookCard } from "../../components/BookCard";
import { Favorite } from "../../components/Favorite";
import { Search } from "../../components/Search";
import { useBookContext } from "../../hooks/useContextDataBook";
import * as S from "./styles";

export const Result = () => {
  const { books } = useBookContext();
  console.log(books, "no result");
  return (
    <S.Container>
      <S.Result>
        <S.ResultHeader>
          <S.ResultTitle>
            <p>Biblioteca Virtual</p>
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
              title={book.title}
              description={book.description}
              publishedDate={book.publishedDate}
              infoLink={book.infoLink}
              handleFavorite={() => {
                return true;
              }}
              isFavorite={false}
            />
          ))}
        </S.ResultContainer>
      </S.Search>
    </S.Container>
  );
};
