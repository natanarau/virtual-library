import styled from "styled-components";

export const FavoriteButton = styled.button`
  border-radius: 10px;
  background-color: white;
  border-style: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  font-size: 13px;
  color: var(--blueDark);

  img {
    width: 20px;
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    font-size: 9px;
    img {
      width: 15px;
    }
  }
`;
