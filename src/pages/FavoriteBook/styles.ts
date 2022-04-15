import styled from "styled-components";


export const Container = styled.div`

`;

export const FavoriteBookContainer = styled.div`
  background-color: var( --light-purple);
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 2.5vh;
  padding: 20px;
`;

export const FavoriteBookHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export const FavoriteBookTitle = styled.div`
  color: #F2F2F2;
  font-size:30px;
  @media (max-width: 720px) { 
    font-size: 20px;
  }
  p{
    text-decoration: none;
    color: #F2F2F2;
  }
`;

export const linkStyle = {
  textDecoration: "none",
};

export const FavoriteBookMenu = styled.div`
  display: flex;
  color: #F2F2F2;
  font-size: 1rem;
  display: flex;
  align-items: center;
  p{
    margin-right: 20px;
  }
`
export const FavoriteBook = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--dark);
    width: 100%;
`

export const Search = styled.div`
  background-color: var( --light-purple);
  width: 100%;
  padding: 20px;
`

export const FavoriteError = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #F2F2F2;
  font-size:30px;
  @media (max-width: 720px) { 
    font-size: 20px;
  } 
`

