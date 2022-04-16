import styled from "styled-components";

export const NotFoundContainer = styled.div`
  height: 100vh;
  padding: 5%;
  display: flex;
  align-items: center;
`;

export const NotFoundContent = styled.div`
  background-color: var(--baby);
  border-radius: 20px;
  display: flex;
  max-height: 500px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;

  @media (max-width: 720px) {
    padding: 20px;
    flex-direction: column-reverse;
  }
`;
export const NotFoundImg = styled.img`
  width: 50%;
  border-radius: 20px;
`;

export const NotFoundTitle = styled.h1`
  color: var(--blueDark);
  font-size: 50px;
  @media (max-width: 720px) {
    font-size: 40px;
  }
  margin-bottom: 20px;
`;

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 150px;
  @media (max-width: 720px) {
    padding: 0;
  }
`;

export const NotFoundImgCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: center;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    align-items: center;
  }
`;
