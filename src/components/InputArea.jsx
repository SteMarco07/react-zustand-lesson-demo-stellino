import React from 'react';
import { useStore } from '../store';
import ResourceCard from './ResourceCard';

const InputArea = () => {
    const addResource = useStore((state) => state.createResource);

    const clearInput = () => {
        document.getElementById('name').value = ''
        document.getElementById('quantity').value = 0
        document.getElementById('unit').value = ''
        document.getElementById('type').value = ''
    }

    const handleAdd = async () => {
        const name = document.getElementById('name').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const unit = document.getElementById('unit').value;
        const type = document.getElementById('type').value;

        if (quantity < 0 || quantity > 100 || isNaN(quantity)) {
            alert('La quantità deve essere un numero compreso tra 0 e 100.');
            return;
        } else {

            const data = {
                'name': name,
                'quantity': quantity,
                'unit': unit,
                'type': type
            }

            await addResource(data);
            clearInput()

            return;
        }


    };

    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '10px',
            width: '800px',
            backgroundColor: '#2a2a2a',
            color: 'white',
            alignItems: 'center'
        }}>
            <h3>Aggiungi una risorsa</h3>
            <div style={{ display: 'flex', gap: 10, height: 25 }}>
                <input type='text' placeholder='Nome' id='name' />
                <input type='number' placeholder='Quantità' id='quantity' />
                <input type='text' placeholder='Unità' id='unit' />
                <input type='text' placeholder='Tipo' id='type' />
            </div>
            <div style={{ width: '100%', marginTop: 10 }}>
                <button onClick={handleAdd}>Aggiungi la risorsa</button>
            </div>

        </div>
    )
}

export default InputArea;