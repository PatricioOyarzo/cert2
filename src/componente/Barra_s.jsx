import { Toolbar } from 'primereact/toolbar';

function Barra_s() {
  const startContent = <h2 style={{ color: 'black' }}>Sansamark</h2>;

  return <Toolbar start={startContent} />;
}

export default Barra_s;