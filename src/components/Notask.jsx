import { useState } from 'react'
import { ClipboardText } from 'phosphor-react'
import styles from './notask.module.css'

export function Notask() {
    return (

       <div>
        
            <div className={styles.anta}>

            
            <div className={styles.area}>
                <div className={styles.logo}>
                    <ClipboardText size={48} color='#333333'/>
                    <span className={styles.span1}>Você ainda não tem tarefas cadastradas</span>
                    <span className={styles.span2}>Crie Tarefas e organize seu itens a fazer</span>
                </div>

            </div>
            </div>

        </div>
    )
    
  }