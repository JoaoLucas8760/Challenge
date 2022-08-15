import { useState } from 'react'
import { ClipboardText, Trash } from 'phosphor-react'
import styles from './task.module.css'

export function Tasks({content, deleteTarefas}) {
    function handleDeleteTarefas(){
        console.log('DELETE')

        deleteTarefas(content)
    }


    return (

     
            
            <div className={styles.taskarea}>

                <div className={styles.card}> 
                    
                    <div className={styles.intertext}>
                        <button className={styles.checkbox} type='checkbox'/>
                        <span>{content}</span>
                    </div>

                    <button onClick={handleDeleteTarefas}className={styles.buttontrash}><Trash  className={styles.logotrash} size={26} color='#808080' /></button>
                </div>
                
                
                
            </div>

    )
    
  }