import React, { useState } from 'react';
import { useStore } from '../store';
import ResourceCard from './ResourceCard';

const InputArea = () => {
    const addResource = useStore((state) => state.createResource);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    const [type, setType] = useState('');

    const handleAdd = async (event) => {
        event.preventDefault();
        const qty = parseInt(quantity);
        if (qty < 0 || qty > 100 || isNaN(qty)) {
            alert('La quantità deve essere un numero compreso tra 0 e 100.');
            return;
        }

        const data = {
            name,
            quantity: qty,
            unit,
            type
        };

        await addResource(data);

        // Clear inputs
        setName('');
        setQuantity('');
        setUnit('');
        setType('');
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
            <form onSubmit={handleAdd}>
                <div style={{ display: 'flex', gap: 10, height: 25, width: '100%' }}>
                    <input type='text' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} style={{ flex: 1 }} />
                    <input type='number' placeholder='Quantità' value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{ flex: 1 }} min='0' />
                    <input type='text' placeholder='Unità' value={unit} onChange={(e) => setUnit(e.target.value)} style={{ flex: 1 }} />
                    <input type='text' placeholder='Tipo' value={type} onChange={(e) => setType(e.target.value)} style={{ flex: 1 }} />
                </div>
                <div style={{ width: '100%', marginTop: 10 }}>
                    <button type='submit' style={{width: '100%'}}>Aggiungi la risorsa</button>
                </div>
            </form>
        </div>
    )
}

export default InputArea;