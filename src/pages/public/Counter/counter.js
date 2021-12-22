import React from 'react';
import dispatch from '@redux/dispatchers/appDispatcher';
import { useSelector } from 'react-redux';
export default function Counter() {
    let myval = useSelector(state => state.UpdateNum);
    const btn = {
        padding: '10px',
        margin: '3px 4px',
        width: '3pc'
    }
    return (
        <div style={{ display: 'block', height: '200px', width: '200px', margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'centre' }}>
                <button style={btn} onClick={() => { dispatch.increaseNum() }}>+</button>
                <h4 style={{ padding: '5px', margin: '5px', fontSize: '2pc' }}>{myval}</h4>
                <button style={btn} onClick={() => { dispatch.decreaseNum() }}>-</button>

            </div>

        </div>
    )
}