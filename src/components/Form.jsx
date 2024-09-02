import { useState } from "react"
import styles from "./form.module.css"
export default function Form({todos,setTodos}){
    //const [todo,setTodo]=useState("")
  const [todo,setTodo]=useState({name:"",done:false})
    
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo({name:"",done:false})
        
    }
    return <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
         <input 
          className={styles.moderninput} 
          placeholder="Enter todo item..." 
          onChange={(e)=>setTodo({name:e.target.value,done:false})} 
          value={todo.name}  
          type="text" />
        <button className={styles.button} type="submit">Add</button>
      </div> 
    </form>
}  
  

    