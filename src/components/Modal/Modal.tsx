import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removeProduct, setAmount } from "../../reducers/CounterSlice";
import { AppDispatch, RootState } from "../../Store";
import { CounterTypes, ModalTypes, ProductType } from "../../Types";
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
  ModalTotalS,
  ModalValuesS,
  ProductButtonXS,
  ProductImgS,
  ProductTitleS,
  ProductValueS,
} from "./styled";

export function Modal({ setModal, modal }: ModalTypes) {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.counter.products);

  function Product({ card, id }: ProductType) {
    console.log(card.amount);
    return (
      <ModalProductS>
        <ProductImgS src={card.photo} />
        <ProductTitleS>{card.name}</ProductTitleS>
        <Counter count={card.amount} id={id} />
        <ProductValueS>{card.price}</ProductValueS>
        <ProductButtonXS
          onClick={() => {
            dispatch(removeProduct(id));
          }}
        >
          X
        </ProductButtonXS>
      </ModalProductS>
    );
  }

  function Counter({ count, id }: CounterTypes) {
    return (
      <CounterS>
        <CounterTitleS>Qte:</CounterTitleS>
        <CounterDisplayS>
          <CounterButtonS
            onClick={() => {
              console.log(products[id], "Objeto");
              if (products[id].amount !== 1) {
                const obj = { ...products[id] };
                obj.amount = obj.amount - 1;
                dispatch(setAmount({ id: id, arr: obj }));
              }
            }}
          >
            -
          </CounterButtonS>
          <CounterCountS>{count}</CounterCountS>
          <CounterButtonS
            onClick={() => {
              const obj = { ...products[id] };
              obj.amount = obj.amount + 1;
              console.log(products[id]);
              console.log(obj);
              dispatch(setAmount({ id: id, arr: obj }));
            }}
          >
            +
          </CounterButtonS>
        </CounterDisplayS>
      </CounterS>
    );
  }

  function total() {
    let result = 0;
    products.map((e) => {
      result = result + e.amount * e.price;
    });
    return result;
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
        {products.map((e, i) => (
          <Product key={e.name} card={e} id={i}></Product>
        ))}
      </ModalContentS>
      <ModalTotalS>
        <ModalValuesS>Total</ModalValuesS>
        <ModalValuesS>R${total()}</ModalValuesS>
      </ModalTotalS>
      <ModalBuyS>Finalizar Compra</ModalBuyS>
    </ModalS>
  );
}
