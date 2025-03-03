import styles from './Display.module.css'
import { useState } from 'react';
const Display=({calVal})=>{
    return(
        <>
        <input type="text" name="" className={styles.display} value={calVal} readOnly/>
        </>
    )

}
export default Display;