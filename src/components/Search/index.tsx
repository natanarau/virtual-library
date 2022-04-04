import { SetStateAction, useState } from "react";
import search from "../../assets/imgs/search.png";
import { useBookContext } from "../../hooks/useContextDataBook";
import * as S from "./styles";

export const Search = () => {
  const [setBusca, setBuscaState] = useState("");
  const { setSearch, seCurrentPage } = useBookContext();

  seCurrentPage(1);

  const handleSubmit = () => {
    seCurrentPage(1);
    setSearch(setBusca);
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setBuscaState(event.target.value);
  };

  setSearch(setBusca);

  return (
    <S.SearchContainer>
      <label></label>
      <S.Search>
        <S.SearchInput
          name="book"
          placeholder="O que esta procurando?"
          type="text"
          value={setBusca}
          onChange={handleChange}
        />
        <S.SearchButton onClick={handleSubmit} type="submit">
          <img src={search} alt="search" />
        </S.SearchButton>
      </S.Search>
    </S.SearchContainer>
  );
};
