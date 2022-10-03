import ItemListContainer from "./ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/container/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/container/ItemDetailContainer/CartView/Cart"
import { CustomProvider } from "./components/Context/CustomContainer"


const App = () => {
  const welcomeTxt = 'DESTACADOS'
  const dash = `hasta 3 cuotas sin interés`
  return (
    <>
      <CustomProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={welcomeTxt} />} />
            <Route path='/categories/:IdCateg' element={<ItemListContainer greeting={dash} />} />
            <Route path='/product/:IdProduc' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CustomProvider>
    </>
  );
};

export default App 