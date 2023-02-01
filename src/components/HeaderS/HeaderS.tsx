import { ShoppingCart } from "@styled-icons/typicons/ShoppingCart";
import { ModalTypes } from "../../Types";
import {
  ButtonShop,
  MainHeader,
  MainLogo,
  MainMks,
  MainSistemas,
} from "./styled";

export function HeaderS({ modal, setModal }: ModalTypes) {
  return (
    <MainHeader>
      <MainLogo>
        <MainMks>MKS</MainMks>
        <MainSistemas>Sistemas</MainSistemas>
      </MainLogo>
      <MainLogo>
        <ButtonShop onClick={() => setModal(true)}>
          <ShoppingCart width={30} />
        </ButtonShop>
      </MainLogo>
    </MainHeader>
  );
}
