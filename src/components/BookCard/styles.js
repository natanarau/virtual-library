import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  padding: 2vh 2vw;
  width: 31.25em;
  border-radius: 0.625em;
  box-shadow: 3px 3px 6px #9f352f75;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  img {
    margin: 0 2.5em 0 2.5em;
    box-shadow: 3px 3px 6px #9f352f75;
    border-radius: 0.625em;
  }

  h1 {
    font: bold 15px Montserrat;
  }

  h2 {
    font: bold 14px Montserrat;
  }

  p {
    font: normal 14px Montserrat;
  }

  button {
    border-radius: 10px;
    border: 1px solid #9f352f;
    background: #9f352f 0% 0% no-repeat padding-box;
    color: #ffffff;
    font: bold 15px Montserrat;
    cursor: pointer;
  }
`;

export const StarContainer = styled.div`
  /* position: absolute;
  right: 0;
  top: 0; */
  display: flex;
  justify-content: flex-end;

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export const InfoCol = styled.div`
  display: grid;
`;
