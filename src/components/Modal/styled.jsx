import styled from "styled-components";

export const ModalS = styled.div`
  height: 100vh;
  width: 500px;
  position: fixed;
  right: 0;
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
`;

export const ModalContentS = styled.div`
  height: 90%;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ModalBarS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitleS = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;
  width: 180px;
`;

export const ModalProductsS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalBuyS = styled.div`
  height: 10%;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
`;

export const ModalButtonXS = styled.button`
  background-color: black;
  border-radius: 50%;
  height: 32px;
  width: 35px;
  color: white;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
`;

export const ModalTotalS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
`;

export const ModalValuesS = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

// ---------------------- Product --------------------------------

export const ModalProductS = styled.div`
  background-color: white;
  position: relative;
  height: 80px;
  width: 350px;
  display: flex;
  align-items: center;
  padding: 20px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  justify-content: space-between;
`;

export const ProductImgS = styled.img`
  height: 100%;
`;

export const ProductTitleS = styled.div`
  font-size: 13px;
  width: 85px;
`;

export const ProductValueS = styled.div`
  font-weight: 700;
  font-size: 15px;
`;

export const ProductButtonS = styled.div`
  font-size: 13px;
`;

export const ProductButtonXS = styled.button`
  position: absolute;
  right: -10px;
  top: -10px;
  background-color: black;
  border-radius: 50%;
  height: 22px;
  width: 25px;
  color: white;
  font-weight: 700;
  text-align: center;
`;

// ---------------------- Counter --------------------------------

export const CounterS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
`;

export const CounterTitleS = styled.div`
  font-size: 10px;
`;

export const CounterDisplayS = styled.div`
  display: flex;
  border: 1px solid #bfbfbf;
  padding: 10px 5px;
  border-radius: 8px;
  align-items: center;
  height: 5px;
`;

export const CounterButtonS = styled.button`
  background-color: inherit;
  border: none;
`;

export const CounterCountS = styled.div`
  font-size: 10px;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  padding: 5px 8px;
`;
