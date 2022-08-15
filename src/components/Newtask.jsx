import { useState } from 'react'
import {PlusCircle} from 'phosphor-react'

import styles from './newtask.module.css'
import iconPlus from '../assets/Layer-2.svg'
import { Tasks } from './task'
import { Headertask } from './Headertask'
import { Notask } from './Notask'


export function Newtask() {

  const [tarefas, setTarefas] = useState([
    ])
  

    function handleNewTask (){
      event.preventDefault()
      
     const newTarefaText = event.target.tarefa.value
      setTarefas([...tarefas, newTarefaText])

      event.target.tarefa.value = ''  
    }

    function deleteTarefas(taskToDelete){
      const taskSemODeletado = tarefas.filter(task => {
        return task != taskToDelete
    }) 
      setTarefas(taskSemODeletado )

    }

  return (


        <div className={styles.div}>
          
          <form onSubmit={handleNewTask} className={styles.corpo}>
            <input  name='tarefa' className={styles.input} placeholder='Adicione uma nova tarefa'></input> 
            <button type='submit' className={styles.button}>
              Criar  
              <PlusCircle size={20}/>
            </button>
          </form>

         <Headertask/>
         

          <div>
            {
              tarefas.length === 0 && (<Notask/>)
               }
            

          </div>
          <div>

          {tarefas.map(task => {
            return <Tasks content={task} deleteTarefas={deleteTarefas}/>
          })}
          </div>
        </div>
  );
}