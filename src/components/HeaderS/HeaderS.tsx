import { ShoppingCart } from "@styled-icons/typicons/ShoppingCart";
import {
  ButtonShop,
  MainHeader,
  MainLogo,
  MainMks,
  MainSistemas,
} from "./styled";

export function HeaderS() {
  return (
    <MainHeader>
      <MainLogo>
        <MainMks>MKS</MainMks>
        <MainSistemas>Sistemas</MainSistemas>
      </MainLogo>
      <MainLogo>
        <ButtonShop>
          <ShoppingCart width={30} />
        </ButtonShop>
      </MainLogo>
    </MainHeader>
  );
}
