
import ShoppingItem from './components/ShoppingItem'
import './App.css'

function App() {
  return (
    <>
      <h1 className="heading">Nákupní seznam</h1>
      <div className="shoplist">
        <ShoppingItem name="Mléko plnotučné" quantity={3} unit="litry" bought={true} />
        <ShoppingItem name="Tavený sýr" quantity={5} unit="ks" bought={false} />
        <ShoppingItem name="Jogurt jahodový" quantity={2} unit="ks" bought={false} />
        <ShoppingItem name="Mouka polohrubá" quantity={1} unit="kg" bought={true} />
        <ShoppingItem name="Olej slunečnicový" quantity={2} unit="litry" bought={true} />
      </div>
    </>
  )
}

export default App

