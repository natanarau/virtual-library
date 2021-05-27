import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width : 31.250em;
  padding: 2vh 2vw;
  border-radius: 0.625em;
  box-shadow: 3px 3px 6px #9F352F75;

  img{
      margin: 0 2.500em 0  2.500em;
      box-shadow: 3px 3px 6px #9F352F75;
      border-radius: 0.625em;
  }

  h1{
    font: bold 15px Montserrat;
  }

  h2{
    font: bold 14px Montserrat;
  }

  p{
    font: normal 14px Montserrat;
  }

  button{
    border-radius: 10px;
    border: 1px solid #9F352F;
    background: #9F352F 0% 0% no-repeat padding-box;
    color: #ffffff;
    font: bold 15px Montserrat;
    cursor: pointer;
  }
`;

export const InfoCol = styled.div`
  display: grid;
`;
