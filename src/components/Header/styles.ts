import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--baby);
  width: 100%;
`;

export const ContainerHeader = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const HeaderTitle = styled.div`
  color: var(--blueDark);
  font-size: 30px;
  @media (max-width: 720px) {
    font-size: 20px;
  }
  p {
    text-decoration: none;
    color: var(--blueDark);
  }
`;

export const linkStyle = {
  textDecoration: "none",
};

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;
