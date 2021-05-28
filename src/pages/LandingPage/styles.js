import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1vw;
`;

export const Header = styled.div`
  display: flex;
  p{
    font: 30px Montserrat bold;
    padding: 2vh 1vw;
  }
  form{
    text-align: right;
    cursor: pointer;
    input{
      font: 20px Montesserat normal;
      padding: 2vh 1vw;
      border-radius: 10px;
    }
    button{
    border-radius: 10px;
    background: #9F352F 0% 0% no-repeat padding-box;
    color: #ffffff;
    font: bold 15px Montserrat;
    cursor: pointer;
    width: 100px;
    height: 49px;
  }
  }
   
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5vh; 
`;