import {React, useContext} from 'react';
import './SpinLoader.css'
import { AppContext } from '../Context';

export default function SpinLoader({parentheight, height, width}) {
    const { themeName } = useContext(AppContext);

    return (
        <div className='bodyloader' style={{height:parentheight}}>
            <div className={`${themeName == 'dark' ? 'darkloader' : 'loader'}`} style={{height:height, width:width}}></div>
        </div>
    )
}