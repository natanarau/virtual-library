import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../../hooks/useContextDataBook";
import * as S from "./styles";

export const Search = () => {
  const [setBusca, setBuscaState] = useState("");
  const { setSearch, setCurrentPage } = useBookContext();

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
        <Link to="/results">
          {" "}
          <S.SearchButton onClick={handleSubmit} type="submit">
            <p>Procurar Livro</p>
          </S.SearchButton>
        </Link>
      </S.Search>
    </S.SearchContainer>
  );
};
