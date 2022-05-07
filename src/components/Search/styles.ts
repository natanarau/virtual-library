import styled from "styled-components";

export const SearchContainer = styled.div``;

export const Search = styled.div`
  transition: filter 0.2s;
  display: flex;
  width: 100%;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const SearchInput = styled.input`
  border-style: none;
  border-radius: 10px 0 0 10px;
  font-size: 11px;
  height: 3.25rem;
  padding: 20px;
  width: 100%;

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  ::placeholder {
    color: var(--blue);
  }
`;

export const SearchButton = styled.button`
  border-style: none;
  border-radius: 0 10px 10px 0;
  background-color: var(--blue);
  font-size: 11px;
  height: 3.25rem;
  padding: 5px;
  width: 100%;
  p {
    margin: 0;
    color: var(--baby);
    line-height: 1.2;
  }
  :hover {
    background-color: var(--blueDark);
  }
`;
