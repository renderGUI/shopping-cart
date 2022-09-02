import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Cart from "./pages/Cart";
import Items from "./pages/Items";
import { ItemsContextProvider } from "./contexts/items-contexts";

const App = () => {
  return (
    <div>
      <ItemsContextProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Items />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ItemsContextProvider>
    </div>
  );
};

export default App;
