import styled from 'styled-components';

export const Container = styled.div`
  padding: 0vh 1vw;

  .pagination {
    margin-top: 5vh;
    margin-bottom: 5vh;
    justify-content: center;
    /* justify-content: space-around; */
    /* border: solid 1px red; */
  }

  .page-button {
    flex: 1;
    display: flex;
    justify-content: center;
    color: #9f352f;
  }

  .page {
    width: 5em;
    border: solid 1px #9f352f;
  }

  .active {
    background-color: #9f352f;
  }

  .active-page-button {
    color: #fff;
  }

  .next-button {
    margin-left: 1em;
    padding: 0 10px;
    border: solid 1px #9f352f;
    color: #9f352f;
  }

  .previous-button {
    margin-right: 1em;
    padding: 0 10px;
    border: solid 1px #9f352f;
    color: #9f352f;
  }
`;

export const CustomForm = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
`

export const Header = styled.div`
  p{
    margin-top: 30px;
    text-align: center;
    color:  #9F352F;
    font: bold 30px Montserrat;

  }
  form{
    text-align: center;
    font: Montserrat 10px normal
  }
  button{
    border-radius: 5px;
    margin-left: 5px;
    border: 1px solid #707070;
    background: #9F352F;
    color: white;
    font: bold 14px Montserrat;
    padding: 5px;

  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5vh; 
`;