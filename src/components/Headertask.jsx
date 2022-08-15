import { useState } from 'react'
import { ClipboardText, Trash } from 'phosphor-react'
import styles from './task.module.css'

export function Headertask() {
    return (

       <div>
            <div className={styles.div}>
                <div className={styles.letras}>
                    <strong className={styles.blue}>Tarefas Criadas <span>0</span></strong>
                    <strong className={styles.purple}>Concluidas <span>0</span></strong>
                </div>
            </div>
            
            
        
        </div>
    )
    
  }