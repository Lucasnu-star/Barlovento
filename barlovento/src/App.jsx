

import './App.css'
import { Cards, NavBar } from './components'
import { Barlovento } from './components/barlovento'

function App() {
 

  return (
    <>
      <Barlovento/>
      <NavBar/>
      <Cards 
        children={<h4>sadba</h4>}
      >


      </Cards>
    </>
  )
}

export default App
