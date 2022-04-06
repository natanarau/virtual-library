import bg from "../../assets/imgs/bg1.png";
import * as S from "./styles";

export const NotFound = () => {
  return (
    <S.NotFoundContainer>
      <S.NotFoundContent>
        <S.NotFound>
          <S.NotFoundTitle>Página não encontrada</S.NotFoundTitle>
        </S.NotFound>
        <S.NotFoundImgCard>
          <S.NotFoundImg src={bg} alt="bg" />
        </S.NotFoundImgCard>
      </S.NotFoundContent>
    </S.NotFoundContainer>
  );
};
