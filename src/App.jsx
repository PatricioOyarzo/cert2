import { TabView, TabPanel } from 'primereact/tabview';
import Barra_s from './componente/Barra_s';
import Comprar_entrada from './componente/Comprar_entrada';
import EntradasCompradas from './componente/EntradasCompradas';
import './App.css'

function App() {
  return (
    <div>
      <Barra_s />
      <TabView>
        <TabPanel header="Comprar Entrada">
          <Comprar_entrada />
        </TabPanel>
        <TabPanel header="Entradas Compradas">
          <EntradasCompradas />
        </TabPanel>
      </TabView>
    </div>
  )
}

export default App
