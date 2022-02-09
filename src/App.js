import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/State";
import AddedCart from "./pages/AddedCart/AddedCart";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/added-product" element={<AddedCart />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
