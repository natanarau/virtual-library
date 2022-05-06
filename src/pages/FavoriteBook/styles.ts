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
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f2f2f2;
  font-size: 30px;
  @media (max-width: 720px) {
    font-size: 20px;
  }
`;

export const Breadcrumbs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 20px 0 20px;
  align-items: center;
  align-content: center;
  a,
  p {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--baby);
    svg {
      margin-right: 5px;
      color: var(--blueDark);
      font-size: 20px;
    }
  }
  a:hover {
    color: var(--blueDark);
    cursor: pointer;
  }
  #active {
    font-weight: 600;
    color: var(--blueDark);
  }
`;
