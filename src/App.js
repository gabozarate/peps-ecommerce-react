import ItemListContainer from "./ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/container/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  const welcomeTxt = 'CATÁLOGO'
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting={welcomeTxt} />
        <ItemDetailContainer/> 
      </BrowserRouter>
    </>
  );

};

export default App 