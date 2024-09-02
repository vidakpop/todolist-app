import styles from "./todoitem.module.css"
export default function TodoItem({item,todos,setTodos}){
    function handleDelete(item){
        console.log("delete for item",item)
        setTodos(todos.filter((todo)=>todo !== item))
        
    }
    function handleCLick(name){
        const newArray=todos.map((todo)=>todo.name===name? {...todo,done:!todo.done}:todo)
         setTodos(newArray)
        
    }
    const className = item.done ? styles.completed : ""
    return <div className={styles.item}>
        <div className={styles.itemName}>
            <span className={className} onClick={()=>handleCLick(item.name)}>{item.name}</span>
        <span>
        <button onClick={()=>handleDelete(item)} className={styles.deletebutton}>x</button>
       </span>
        </div>
       
       <hr className={styles.line}/>
        
        </div>
}