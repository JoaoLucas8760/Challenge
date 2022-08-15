import { useState } from 'react'

import {Rocket} from 'phosphor-icons'
import logoRocket from '../assets/Logo.svg'

import styles from './Header.module.css'
import { Headertask } from './Headertask';
import { Newtask } from './Newtask';

export function Header() {
  return (
        <div>
          <header className={styles.header}>
            <img src={logoRocket} alt="logo" />
          </header>

          <Newtask/>



        </div>
          


        
          
        
  );
}