import styled from "styled-components";

export const BookCardContainer = styled.div`
  display: flex;
  padding: 2vh 2vw;
  max-width: 30em;
  width: 100%;
  flex-direction: column;
`;

export const BookCard = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 20px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #Fff;
`
export const BookCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BookCover = styled.img`
  width: 133;
  height: 196;
  border-radius: 10px;
`
export const BookCardInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 20px;
`
export const BookCardTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
`
export const BookCardPublished = styled.div`
  font-size: 9px;
  font-weight: lighter;
  margin-bottom: 20px;
`
export const BookCardDescription = styled.div`
  font-size: 12px;
  font-weight: lighter;
 
  span{
    font-weight: bold;
  }
`
export const Bottons = styled.div`
  display: flex; 
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 720px) { 
    flex-direction: column;
  }
`
export const BottonSeeMore = styled.button`
  border-style: solid ;
  border-width: 1px;
  border-color: #0D0D0D;
  background-color: transparent;
  font-size: 13px;
  border-radius: 10px;
  height: 2.25rem;  
  width: 100%;
  margin-right: 1px;
  @media (max-width: 720px) { 
   margin-bottom: 1px;
  }
  
  &:hover {
    filter: brightness(0.9);
  }
`
export const BottonFavorite = styled.button`
  border-style: solid ;
  border-width: 1px;
  border-color: #0D0D0D;
  border-radius: 40px;
  font-size: 13px;
  height: 2.25rem;
  background-color: transparent;
  width: 10%;
  margin-left: 1px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 720px) { 
   margin-top: 1px;
  }
`



