import ItemListContainer from "./ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

const App = () => {
  const welcomeTxt = 'CATÁLOGO'
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={welcomeTxt}/>
    </>
  )
      
}

export default App 