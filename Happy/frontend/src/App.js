import { Route, Routes } from "react-router";
import Header from "./component/Header/Header";
import '../src/assets/css/styles.css'
import Home from "./pages/Home/Home";
import ProductList from "./pages/Product/ProductList/ProductList";
import Profile from "./pages/Profile/Profile";


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
