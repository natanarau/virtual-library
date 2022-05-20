import styled from "styled-components";

export const BookCardContainer = styled.div`
  display: flex;
  max-width: 320px;
  width: 100%;
  min-height: 292px;
  flex-direction: column;
`;

export const BookCard = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 20px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--baby);
`;
export const BookCardInfo = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const BookCover = styled.img`
  width: 133px;
  height: 196px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media (max-width: 720px) {
    width: 103px;
    height: 166px;
  }
`;
export const BookCardInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const BookCardTitle = styled.h1`
  font-size: 1em;
  font-weight: bold;
  color: var(--blueDark);
`;
export const BookCardPublished = styled.h1`
  font-size: 9px;
  font-weight: 300;
  margin-bottom: 10px;
  color: var(--blueDark);
  line-height: 10px;
  @media (max-width: 720px) {
    margin-bottom: 5px;
  }
`;
export const BookCardDescription = styled.h6`
  margin-top: 10px;
  font-size: 11px;
  font-weight: 300;
  color: var(--blueDark);
  line-height: 17px;
`;
export const Bottons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
export const BottonSeeMore = styled.button`
  border-style: none;
  background-color: var(--blue);
  font-size: 13px;
  border-radius: 10px;
  height: 2.25rem;
  width: 85%;
  color: var(--baby);
  margin-right: 1px;
  @media (max-width: 720px) {
    margin-bottom: 5px;
    width: 100%;
  }

  :hover {
    filter: brightness(0.9);
  }
`;
export const BottonFavorite = styled.button`
  border-style: none;
  font-size: 13px;
  height: 2.25rem;
  background-color: transparent;
  width: 13%;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-left: 1px;
  align-items: center;
  display: flex;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 720px) {
    width: 100%;
    border-radius: 10px;
  }
`;
