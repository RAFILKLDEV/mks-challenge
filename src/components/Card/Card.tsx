import { CardTypes } from "../../Types";
import {
  CardBar,
  CardButton,
  CardContainer,
  CardDesc,
  CardImg,
  CardInfo,
  CardPrice,
  CardTitle,
} from "./styled";

export function Card({ card }: CardTypes) {
  return (
    <>
      <CardContainer>
        <CardInfo>
          <CardImg src={card.photo} />
          <CardBar>
            <CardTitle>{card.name}</CardTitle>
            <CardPrice>R${card.price}</CardPrice>
          </CardBar>
          <CardDesc>Redesigned from scratch and completely revised.</CardDesc>
        </CardInfo>
        <CardButton>Comprar</CardButton>
      </CardContainer>
    </>
  );
}
