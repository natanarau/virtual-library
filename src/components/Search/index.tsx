import { SetStateAction, useState } from "react";
import { useBookContext } from "../../hooks/useContextDataBook";
import * as S from "./styles";

export const Search = () => {
  const [setBusca, setBuscaState] = useState("");
  const { setSearch, setCurrentPage, pages, books } = useBookContext();

  setCurrentPage(1);

  const handleSubmit = () => {
    setCurrentPage(1);
    setSearch(setBusca);
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setBuscaState(event.target.value);
  };

  setSearch(setBusca);

  console.log(pages, "pages");
  console.log(books, "books");

  return (
    <S.SearchContainer>
      <S.Search>
        <S.SearchInput
          name="book"
          placeholder="Encontre o seu livro aqui"
          type="text"
          value={setBusca}
          onChange={handleChange}
        />
        <S.SearchButton onClick={handleSubmit} type="submit">
          <p>Procurar Livro</p>
        </S.SearchButton>
      </S.Search>
    </S.SearchContainer>
  );
};
