import React, { useState } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);
    const btn = {
        padding: '10px',
        margin: '3px 4px',
        width: '3pc'
    }
    return (
        <div style={{ display: 'block', height: '200px', width: '200px', margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'centre' }}>
                <button style={btn} onClick={() => { setCount(pre => pre + 1) }}>+</button>
                <h4 style={{ padding: '5px', margin: '6px', fontSize: '2pc' }}>{count}</h4>
                <button style={btn} onClick={() => { setCount(pre => pre - 1) }}>-</button>
            </div>

        </div>
    )
}