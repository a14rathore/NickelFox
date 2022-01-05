import React from 'react';
import Style from './HeaderStyle.module.css';
import Switch from '@mui/material/Switch';
import { context } from './DarkModeContext';

function Header() {
    const value = React.useContext(context);
    const onChangeHandle = () => {
        if (!value.darkmode) { localStorage.setItem('mode', true), value.setDarkmode(true); }
        else { localStorage.setItem('mode', false), value.setDarkmode(false); }
    }
    return (
        <nav className={value.darkmode ? Style.div2 : Style.div1}>
            <ul>
                <li><a href='/auth/login'>Login</a></li>
                <li><a href='/auth/signup'>SignUP</a></li>
                <li><a href='/auth/counter'>Counter</a></li>
            </ul>
            <div>
                <label>
                    {value.darkmode ? <p>LightMode</p> : <p>DarkMode</p>}
                    <Switch
                        checked={value.darkmode}
                        name="loading"
                        color="primary"
                        onChange={onChangeHandle}
                    />
                </label>
            </div>
        </nav>
    )
}

export default Header
