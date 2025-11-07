import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';

function EntradasCompradas() {
  const [entradas, setEntradas] = useState([]);
  const [peliculaFiltro, setPeliculaFiltro] = useState(null);

  useEffect(() => {
    const entrada_g = JSON.parse(localStorage.getItem('entradas')) || [];
    setEntradas(entrada_g);
  }, []);

  const peliculasUnicas = [...new Set(entradas.map(i => i.pelicula))].map(buscador => ({
    label: buscador,
    value: buscador
  }));

  const entradasFiltradas = peliculaFiltro 
    ? entradas.filter(i => i.pelicula === peliculaFiltro)
    : entradas;

  return (
    <div>
      <h2>Entradas Compradas</h2>
     <Dropdown 
        value={peliculaFiltro}
        options={peliculasUnicas}
        onChange={(e) => setPeliculaFiltro(e.value)}
        placeholder="Filtrar por película"
        showClear
      />
     <div>-------------------------------------------- </div>
      <DataTable value={entradasFiltradas}>
        <Column field="dia" header="Día" />
        <Column field="pelicula" header="Película" />
        <Column field="cantidad" header="Cantidad de Entradas" />
        <Column field="valorPagar" header="Valor a Pagar" />
      </DataTable>
    </div>
  );
}

export default EntradasCompradas;