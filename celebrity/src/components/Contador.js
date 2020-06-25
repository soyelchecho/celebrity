import React, { useState , Fragment} from 'react';

const Contador = () => {

    const [contador, setNumero] = useState(0);

    const aumentar = () => {
        setNumero(contador + 1);
    }

    return (
        <Fragment>
            <h3>Primer Componente {contador}</h3>
            <button onClick={aumentar}>Aumentar Valor</button>
        </Fragment>
    );
}
 
export default Contador;