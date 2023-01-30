import { useState, useEffect } from "react";
import { HeaderS } from "./components/HeaderS/HeaderS";
import { Content } from "./components/ContentS/ContentS";
import { GlobalStyle } from "./globalStyles";
import { Footer } from "./components/Footer/Footer";
import axios from "axios";

function App() {
  const [info, setInfo] = useState<ProductsTypes[]>([]);

  interface ProductsTypes {
    photo: string;
    name: string;
    price: number;
    desc: string;
  }

  useEffect(() => {
    async function getApi() {
      const response = await axios.get(
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=DESC"
      );
      setInfo(response.data.products);
    }
    getApi();
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeaderS />
      <Content />
      <Footer />
    </>
  );
}

export default App;
