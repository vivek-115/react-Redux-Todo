import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask } from '../actions';
import { MdDelete } from 'react-icons/md';

function Todo() {
   const todos= useSelector(state=>state.task);
   const dispatch=useDispatch();
   const[task,setTask]=useState("");
  
 const  handleFormSubmit=(e)=>{
    e.preventDefault();
    dispatch(addTask(task));
    return setTask("");
 }

 const handleTaskDelete=(id)=>{
    return dispatch(deleteTask(id));
 }
  return (
    <div className='bg-slate-600 w-full h-screen flex items-center justify-center'>
    <div className='w-1/3 p-3 bg-zinc-100 rounded-3xl'><h1 className='font-semibold text-center text-2xl'>TODO 🚀</h1>
        <form onSubmit={handleFormSubmit} >
            <input type="text" required className='rounded-sm p-2 w-[80%] ' placeholder='Add a new task' 
            value={task} onChange={(e)=>setTask(e.target.value)}/>
             <button className='px-3 py-2.5 bg-black text-white rounded-lg -ml-3 '>ADD TASK</button>
        </form>
       

       <ul>
            {todos.map((curTask,index)=>{

                return <li key={index} className='flex items-center justify-between mt-2 p-2'>
                    <p className='flex items-center font-semibold text-slate-800'>{curTask}</p>
                  <button onClick={()=>handleTaskDelete(index)}><MdDelete color='red' size={"1.4em"}/> </button>
                </li>
            })}
       </ul>

    </div>
    </div>
  )
}

export default Todo