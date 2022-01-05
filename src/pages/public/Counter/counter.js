import React from 'react';
import dispatch from '@redux/dispatchers/appDispatcher';
import { useSelector } from 'react-redux';
import { context } from '@components/Header/DarkModeContext';
import { dark } from '@mui/material/styles/createPalette';
export default function Counter() {
    let myval = useSelector(state => state.UpdateNum);
    const btn = {
        padding: '10px',
        margin: '3px 4px',
        width: '3pc'
    }
    const { darkmode } = React.useContext(context)
    return (
        <div style={{ display: 'block', height: '200px', width: '200px', margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'centre' }}>
                <button style={btn} onClick={() => { dispatch.increaseNum() }}>+</button>
                <h4 style={{ padding: '5px', margin: '5px', fontSize: '2pc', color: `${darkmode ? 'white' : 'black'}` }}>{myval.val}</h4>
                <button style={btn} onClick={() => { dispatch.decreaseNum() }}>-</button>
            </div>

        </div>
    )
}