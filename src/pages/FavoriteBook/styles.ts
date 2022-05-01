import styled from "styled-components";

export const Container = styled.div``;

export const ContainerResult = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const FavoriteContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  margin-top: 30px;
`;
export const FavoriteBookContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: flex-start;
`;

export const Search = styled.div`
  width: 100%;
  padding: 20px;
`;

export const FavoriteError = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f2f2f2;
  font-size: 30px;
  @media (max-width: 720px) {
    font-size: 20px;
  }
`;
