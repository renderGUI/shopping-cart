import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Items from "./pages/Items";
import ItemDetails from "./pages/ItemDetails";
import { ItemsContextProvider } from "./contexts/items-contexts";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("hola");
  }, []);
  
  return (
    <div>
      <ItemsContextProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/items/:itemId" element={<ItemDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ItemsContextProvider>
    </div>
  );
};

export default App;
