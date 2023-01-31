import styled from "styled-components";

export const CardContainer = styled.div`
  height: 270px;
  width: 220px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const CardInfo = styled.div`
  background-color: #ffffff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const CardBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 57px;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  font-size: 16px;
  font-family: "Montserrat";
`;

export const CardPrice = styled.div`
  background-color: #373737;
  border-radius: 5px;
  padding: 5px 8px;
  font-size: 15px;
  color: #ffffff;
  height: 20px;
`;

export const CardDesc = styled.div`
  font-size: 10px;
`;

export const CardButton = styled.button`
  background-color: #0f52ba;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  color: #ffffff;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border: none;
`;

export const CardImg = styled.img`
  width: 190px;
  height: 170px;
`;
