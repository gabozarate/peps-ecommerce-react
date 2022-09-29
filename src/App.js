import ItemListContainer from "./ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/container/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/container/ItemDetailContainer/CartView/Cart"


const App = () => {
  const welcomeTxt = 'destacados'
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
           <Route path='/' element={<ItemListContainer greeting={welcomeTxt} /> } />            
           <Route  path='/categories/:IdCateg' element={<ItemListContainer greeting={welcomeTxt} />}/>
           <Route  path='/product/:IdProduc' element={<ItemDetailContainer/> }/>
           <Route  path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App 