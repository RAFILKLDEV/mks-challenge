import { CardsType } from "../../Types";
import { Card } from "../Card/Card";
import { CardsContent, ContentS } from "./styled";
import { LoaderCircle } from "@styled-icons/boxicons-regular/LoaderCircle";

export function Content({ cards, loading }: CardsType) {
  return (
    <>
      <ContentS>
        {!loading ? (
          <CardsContent>
            {cards.map((e) => (
              <Card key={e.name} card={e}></Card>
            ))}
          </CardsContent>
        ) : (
          <LoaderCircle rotate="270" color="#c7c1c1" width={500} />
        )}
      </ContentS>
    </>
  );
}
