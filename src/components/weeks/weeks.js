import {
    useState
} from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';

function SemanaDesplegable() {
    const [semana, setSemana] = useState('');

    const obtenerSemanas = () => {
        const hoy = new Date();
        const diaSemana = hoy.getDay();
        let semanas = [];

        // Si hoy es antes del viernes, incluir la semana actual
        if (diaSemana < 5) {
            semanas.push(`${hoy.getDate()}/${hoy.getMonth()+1}/${hoy.getFullYear()}`);
        }

        // Obtener las próximas 4 semanas
        for (let i = 0; i < 4; i++) {
            hoy.setDate(hoy.getDate() + 7);
            semanas.push(`${hoy.getDate()}/${hoy.getMonth()+1}/${hoy.getFullYear()}`);
        }

        return semanas;
    };

    const manejarCambio = (evento) => {
        setSemana(evento.target.value);
    };

    return ( 
    <FormControl sx={{ width: '40%'}}>
        <InputLabel > Semana </InputLabel> 
        <Select 
        value = {
            semana
        }
        label = "Semana"
        onChange = {
            manejarCambio
        }>
        {
            obtenerSemanas().map((semana, indice) => ( <MenuItem key = {
                    indice
                }
                value = {
                    semana
                } > {
                    semana
                } </MenuItem>
            ))
        } 
        </Select> 
    </FormControl>
    );
}

export default SemanaDesplegable;