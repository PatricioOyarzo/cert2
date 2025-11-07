import { useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { SelectButton } from "primereact/selectbutton";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { ListBox } from "primereact/listbox";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { ColorPicker } from "primereact/colorpicker";

function Comprar_entrada() {
    const toast = useRef(null);

const [formData, setFormData] = useState({
    dia: null,
    tipo: '',
    cantidad: 0,
    ciudad: '',
    pelicula: ''
});

const dias = [
    { label: 'Lunes', value: 'Lunes' },
    { label: 'Martes', value: 'Martes' },
    { label: 'Miércoles', value: 'Miércoles' },
    { label: 'Jueves', value: 'Jueves' },
    { label: 'Viernes', value: 'Viernes' },
    { label: 'Sábado', value: 'Sábado' },
    { label: 'Domingo', value: 'Domingo' }
];

const tipo_pago = [
    { label: 'Efectivo', value: 'Efectivo' },
    { label: 'Tarjeta', value: 'Tarjeta' }
];

const peliculas = [
    { label: 'Wifi Ralph', value: 'Wifi Ralph' },
    { label: 'Dragon Ball Super Broly', value: 'Dragon Ball Super Broly' },
    { label: 'Cascanueces', value: 'Cascanueces' },
    { label: 'El Grinch', value: 'El Grinch' }
];

const validacion_formulario = () => {
  if (!formData.dia || !formData.tipo || formData.cantidad <= 0 || !formData.ciudad || !formData.pelicula) {
    return false;
  }
  return true;
};

const guardar_entrada = () => {
  if (!validacion_formulario()) {
    toast.current.show({
      severity: 'error',
      summary: 'Error',
      detail: 'Faltan campos por completar',
      life: 3000
    });
    return;
  }

  const entradas = JSON.parse(localStorage.getItem('entradas')) || [];
  const valorPagar = formData.cantidad * 5000;

  entradas.push({
    dia: formData.dia,
    pelicula: formData.pelicula,
    cantidad: formData.cantidad,
    valorPagar: valorPagar,
    tipo: formData.tipo,
    ciudad: formData.ciudad
  });

  localStorage.setItem('entradas', JSON.stringify(entradas));

  toast.current.show({
    severity: 'correcto',
    summary: 'Listo',
    detail: 'Entrada registrada correctamente',
    life: 3000
  });

  setFormData({
    dia: null,
    tipo: '',
    cantidad: 0,
    ciudad: '',
    pelicula: ''
  });
};

return (
    <div>
        <Toast ref={toast} />
        <h2>Comprar Entradas</h2>

        <div>
            <label>Día: </label>
            <Dropdown
                value={formData.dia}
                options={dias}
                onChange={(i) => setFormData({...formData, dia: i.value})}
                placeholder="Seleccione un día"
            />
        </div>
        
        <div>-------------------------------------------- </div> 
        <div>
            <label>Tipo de Pago:</label>
            <SelectButton 
                value={formData.tipo}
                options={tipo_pago}
                onChange={(i) => setFormData({...formData, tipo: i.value})}
            />
        </div>
        <div>-------------------------------------------- </div>
        <div>
            <label>Cantidad de Entradas:</label>
            <InputNumber
                value={formData.cantidad}
                onValueChange={(i) => setFormData({...formData, cantidad: i.value})}
                min={1}
            />
        </div>
                <div>-------------------------------------------- </div>
        <div>
            <label>Ciudad:</label>
            <InputText
                value={formData.ciudad}
                onChange={(i) => setFormData({...formData, ciudad: i.target.value})}
                placeholder="Ingresa tu Ciudad"
            />
        </div>
        <div>-------------------------------------------- </div>
        <div>
            <label>Película:</label>
            <ListBox
                value={formData.pelicula}
                options={peliculas}
                onChange={(i) => setFormData({...formData, pelicula: i.value})}
                placeholder="Seleccione una película"
            />
        </div>
        <div>-------------------------------------------- </div>
        <Button label="Comprar Entrada" onClick={guardar_entrada} />
    </div>
);
}

export default Comprar_entrada;