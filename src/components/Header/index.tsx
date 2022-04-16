import { Link } from "react-router-dom";
import { Favorite } from "../../components/Favorite";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <S.Header>
        <S.ContainerHeader>
          <S.HeaderHeader>
            <S.HeaderTitle>
              <Link to="/" style={S.linkStyle}>
                <p>Biblioteca Virtual</p>
              </Link>
            </S.HeaderTitle>
            <S.HeaderMenu>
              <Favorite />
            </S.HeaderMenu>
          </S.HeaderHeader>
        </S.ContainerHeader>
      </S.Header>
    </S.Container>
  );
};
