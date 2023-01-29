import React from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: #e5e5e5;
    min-height: 85vh;
  `;

  const Header = styled.div`
    height: 10vh;
    background-color: #0f52ba;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Footer = styled.div`
    height: 5vh;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Logo = styled.div`
    display: flex;
    align-items: baseline;
    padding: 25px 65px 25px;
  `;

  const Mks = styled.div`
    font-size: 40px;
    font-family: "Montserrat";
    font-weight: 600;
    color: #ffffff;
  `;

  const Sistemas = styled.div`
    font-family: "Montserrat";
    color: #ffffff;
    padding-left: 5px;
  `;

  return (
    <>
      <Header>
        <Logo>
          <Mks>MKS</Mks>
          <Sistemas>Sistemas</Sistemas>
        </Logo>
        <div>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.59375 0C0.267188 0 0 0.27 0 0.6C0 0.93 0.267188 1.2 0.59375 1.2H2.90937L3.41406 3.09C3.4B8r3B4p7yhRXuBWLqsQ546WR43cqQwrbXMDFnBi6vSJBeif8tPW85a7r7DM961Jvk4hdryZoByEp8GC8HzsqJpRN4FxGM99375 12.75C5.99687 13.02 6.23438 13.2 6.50156 13.2H16.0016C16.3281 13.2 16.5953 12.93 16.5953 12.6C16.5953 12.27 16.3281 12 16.0016 12H6.97656L6.65 10.74L17.2484 10.2C17.5156 10.2 17.7531 9.99 17.8125 9.72L19 3.12C19.0297 2.94 18.9703 2.76 18.8813 2.64C18.7625 2.49 18.5844 2.4 18.4B8r3B4p7yhRXuBWLqsQ546WR43cqQwrbXMDFnBi6vSJBeif8tPW85a7r7DM961Jvk4hdryZoByEp8GC8HzsqJpRN4FxGM9 8.3125 5.07 8.3125 5.4V7.8C8.3125 8.13 8.04531 8.4 7.71875 8.4C7.39219 8.4 7.125 8.13 7.125 7.8V5.4C7.125 5.07 7.39219 4.8 7.71875 4.8ZM11.2812 4.8C11.6078 4.8 11.875 5.07 11.875 5.4V7.8C11.875 8.13 11.6078 8.4 11.2812 8.4C10.9547 8.4 10.6875 8.13 10.6875 7.8V5.4C10.6875 5.07 10.9547 4.8 11.2812 4.8ZM14.8438 4.8C15.1703 4.8 15.4375 5.07 15.4B8r3B4p7yhRXuBWLqsQ546WR43cqQwrbXMDFnBi6vSJBeif8tPW85a7r7DM961Jvk4hdryZoByEp8GC8HzsqJpRN4FxGM907 14.5172 4.8 14.8438 4.8ZM7.71875 14.4C6.73906 14.4 5.9375 15.21 5.9375 16.2C5.9375 17.19 6.73906 18 7.71875 18C8.69844 18 9.5 17.19 9.5 16.2C9.5 15.21 8.69844 14.4 7.71875 14.4ZM14.8438 14.4C13.8641 14.4 13.0625 15.21 13.0625 16.2C13.0625 17.19 13.8641 18 14.8438 18C15.8234 18 16.625 17.19 16.625 16.2C16.625 15.21 15.8234 14.4 14.8438 14.4Z"
              fill="black"
            />
          </svg>
        </div>
      </Header>
      <Container></Container>
      <Footer>
        <div>MKS sistemas © Todos os direitos reservados</div>
      </Footer>
    </>
  );
}

export default App;
