import styled from "styled-components";

export const ContentS = styled.div`
  background-color: #e5e5e5;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsContent = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 700px;
  gap: 20px;
  grid-template-columns: 220px 220px 220px 220px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 220px 220px;
    grid-template-rows: 400px 400px 400px;
    padding: 50px;
    height: 100%;
  }

  @media (max-width: 425px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(6, 350px);
    padding: 50px;
    gap: 30px;
    height: 100%;
  }
`;
