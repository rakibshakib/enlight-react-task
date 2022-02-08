import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/State";
import AddedCart from "./pages/AddedCart/AddedCart";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/added-product" element={<AddedCart />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
