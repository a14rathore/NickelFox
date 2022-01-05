import React from 'react';
import Style from './HeaderStyle.module.css';
import Switch from '@mui/material/Switch';
import { useTheme } from './DarkModeContext';
import { Link } from 'react-router-dom';

function Header() {
    const theme = useTheme();
    const onChangeHandle = () => {
        theme.setDarkmode((pre) => !pre)
        if (!theme.darkmode) {
            document.body.style.backgroundColor = "#805d88"
        } else {
            document.body.style.backgroundColor = "#FFFCDC"
        }

    }
    return (
        <nav className={theme.darkmode ? Style.div2 : Style.div1}>
            <ul>
                <li><Link to='/auth/login'>Login</Link></li>
                <li><Link to='/auth/signup'>SignUP</Link></li>
                <li><Link to='/auth/counter'>Counter</Link></li>
            </ul>
            <div>
                <label>
                    {theme.darkmode ? <p>LightMode</p> : <p>DarkMode</p>}
                    <Switch
                        checked={theme.darkmode}
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
