import { useDispatch } from "react-redux/es/exports";
import { setProducts } from "../../reducers/CounterSlice";
import { AppDispatch } from "../../Store";
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
  const dispatch = useDispatch<AppDispatch>();

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
        <CardButton
          onClick={() => {
            dispatch(
              setProducts({
                name: card.name,
                photo: card.photo,
                price: card.price,
                amount: 1,
              })
            );
          }}
        >
          Comprar
        </CardButton>
      </CardContainer>
    </>
  );
}
