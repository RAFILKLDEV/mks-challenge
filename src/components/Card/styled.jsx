import styled from "styled-components";

export const CardContainer = styled.div`
  height: 300px;
  width: 220px;
  background-color: aliceblue;
  border-radius: 8px;
`;

export const CardInfo = styled.div`
  height: 90%;
  background-color: aliceblue;
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
  gap: 5px;
`;

export const CardTitle = styled.div`
  font-size: 19px;
  font-family: "Montserrat";
`;

export const CardPrice = styled.div`
  background-color: #373737;
  border-radius: 5px;
  padding: 5px 8px;
  color: #ffffff;
`;

export const CardDesc = styled.div`
  font-size: 10px;
  font-family: "Montserrat";
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
  max-width: 200px;
  max-height: 200px;
`;
