import styled from "styled-components";

export const SearchContainer = styled.div`

`;

export const Search = styled.div`

  transition: filter 0.2s;
  display: flex;
  width: 100%;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SearchButton = styled.button`
  border-style: none;
  border-radius: 0 10px 10px 0;
  background-color: var( --dark);
  font-size: 12px;
  height: 3.25rem;
  max-width: 107px;
  width: 100%;
  p{
    margin-top: 0;
    margin-bottom: 0;
    color: var(--primary-color);
  }
`;

export const SearchInput = styled.input`
  border-style: none;
  border-radius: 10px 0 0 10px;
  font-size: 11px;
  height: 3.25rem;
  max-width: 394px;
  width: 100%;
  padding: 20px;
  &:focus {
    outline: none;
  }
  p{
    margin-top: 0;
    margin-bottom: 0;
  }
`;