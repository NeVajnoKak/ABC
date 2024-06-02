import { Route, Routes } from "react-router";
import Header from "./component/Header/Header";
import '../src/assets/css/styles.css'
import Home from "./pages/Home/Home";
import ProductList from "./pages/Product/ProductList/ProductList";


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
      </Routes>
    </>
  );
}

export default App;
