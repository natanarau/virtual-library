import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: var(--blue);
  height: 100vh;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContent = styled.div`
  background-color: var(--baby);
  border-radius: 20px;
  display: flex;
  max-height: 500px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 720px) {
    padding: 20px;
    flex-direction: column-reverse;
  }
`;
export const HomeImg = styled.img`
  width: 60%;
  margin-top: 20px;
  border-radius: 20px;
  @media (max-width: 1200px) {
    margin-left: 6%;
    width: 75%;
  }
`;

export const HomeTitle = styled.h1`
  color: var(--blueMedium);
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 2rem;
`;

export const HomePhrase = styled.h2`
  color: var(--blueMedium);
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.8;
`;

export const HomeAuthor = styled.h3`
  color: var(--blue);
  font-size: 0.7rem;
  font-weight: 400;
  margin-bottom: 20px;
  opacity: 0.7;
`;

export const HomeSearch = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 150px;
  @media (max-width: 720px) {
    padding: 0;
  }
  @media (min-width: 721px) and (max-width: 1100px) {
    padding: 50px;
  }
`;

export const HomeImgCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: center;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    align-items: center;
  }
`;
