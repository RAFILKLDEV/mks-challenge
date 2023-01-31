import { CardsType } from "../../Types";
import { Card } from "../Card/Card";
import { CardsContent, ContentS } from "./styled";

export function Content({ cards }: CardsType) {
  return (
    <>
      <ContentS>
        <CardsContent>
          {cards.map((e) => (
            <Card card={e}></Card>
          ))}
        </CardsContent>
      </ContentS>
    </>
  );
}
