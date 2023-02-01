import { ModalTypes } from "../../Types";
import {
  CounterButtonS,
  CounterCountS,
  CounterDisplayS,
  CounterS,
  CounterTitleS,
  ModalBarS,
  ModalButtonXS,
  ModalBuyS,
  ModalContentS,
  ModalProductS,
  ModalS,
  ModalTitleS,
  ProductButtonXS,
  ProductImgS,
  ProductTitleS,
  ProductValueS,
} from "./styled";

export function Modal({ setModal, modal }: ModalTypes) {
  function Product() {
    return (
      <ModalProductS>
        <ProductImgS src="https://lojavivara.vtexassets.com/arquivos/ids/322141/Relogio-Calvin-Klein-Unissex-Couro-Marrom-25200154-928_set.jpg?v=1760394617" />
        <ProductTitleS>Apple Watch Series 4 GPS</ProductTitleS>
        <Counter />
        <ProductValueS>R$300</ProductValueS>
        <ProductButtonXS>X</ProductButtonXS>
      </ModalProductS>
    );
  }

  function Counter() {
    return (
      <CounterS>
        <CounterTitleS>Qte:</CounterTitleS>
        <CounterDisplayS>
          <CounterButtonS>-</CounterButtonS>
          <CounterCountS>1</CounterCountS>
          <CounterButtonS>+</CounterButtonS>
        </CounterDisplayS>
      </CounterS>
    );
  }

  return (
    <ModalS>
      <ModalContentS>
        <ModalBarS>
          <ModalTitleS>Carrinho &nbsp;&nbsp; de compras</ModalTitleS>
          <ModalButtonXS onClick={() => setModal((modal = !modal))}>
            X
          </ModalButtonXS>
        </ModalBarS>
        <Product />
        <Product />
      </ModalContentS>
      <ModalBuyS>Finalizar Compra</ModalBuyS>
    </ModalS>
  );
}
