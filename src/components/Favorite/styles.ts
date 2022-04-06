import styled from "styled-components";

export const FavoriteButton = styled.button`
    border-radius: 10px;
    padding: 5px 10px 10px 5px;
    background-color: white;
    border-style: none;
    max-width: 150px;
    width: 100%;
    height: 2.25rem;
    font-size: 11px;

  img {
    width: 1.8rem;
  }
  @media (max-width: 500px) { 
    font-size: 9px;
    img {
      width: 1.5rem;
    }
  }
`;

