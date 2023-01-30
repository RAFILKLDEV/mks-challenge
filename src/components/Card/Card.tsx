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

interface CardTypes {
  photo: string;
  name: string;
  price: number;
  desc: string;
}

export function Card(info: CardTypes) {
  return (
    <>
      <CardContainer>
        <CardInfo>
          <CardImg src={info.photo} />
          <CardBar>
            <CardTitle>{info.name}</CardTitle>
            <CardPrice>`R${info.price}`</CardPrice>
          </CardBar>
          <CardDesc>{info.desc}</CardDesc>
        </CardInfo>
        <CardButton>Comprar</CardButton>
      </CardContainer>
    </>
  );
}
