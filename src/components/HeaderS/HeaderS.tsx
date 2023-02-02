import { ShoppingCart } from "@styled-icons/typicons/ShoppingCart";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../Store";
import { ModalTypes } from "../../Types";
import {
  ButtonShop,
  MainHeader,
  MainLogo,
  MainMks,
  MainSistemas,
  ValueS,
} from "./styled";

export function HeaderS({ modal, setModal }: ModalTypes) {
  const products = useSelector((state: RootState) => state.counter.products);

  return (
    <MainHeader>
      <MainLogo>
        <MainMks>MKS</MainMks>
        <MainSistemas>Sistemas</MainSistemas>
      </MainLogo>
      <MainLogo>
        <ButtonShop onClick={() => setModal(true)}>
          <ShoppingCart width={30} />
          <ValueS>{products.length}</ValueS>
        </ButtonShop>
      </MainLogo>
    </MainHeader>
  );
}
