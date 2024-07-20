import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { addTodo,getTodo, removeTodo } from '../Firebase/db';

function TodoList({ID}) {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
      getTodo(ID,setTodos);
    },[todos,ID])

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleAdd = () => {
        setTodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
        setTodo("");
        addTodo(todo,ID);
    }

    const handleCheck = (e) => { 
        let id = e.target.name;  
        let index = todos.findIndex(item => item.id === id); 
        let newTodos = [...todos];
        newTodos[index].iscompleted = !newTodos[index].iscompleted;
        setTodos(newTodos);
    }

    const handleEdit=(e)=>{
        let editID=e.target.id;
        let index=todos.findIndex(t=>t.id==editID);
        setTodo(todos[index].todo);
        removeTodo(editID,ID);

    }

    const handleRemove=(e)=>{
        let editID=e.target.id;
        removeTodo(editID,ID);
    }


    return (
        <div className='flex justify-center m-8 '>
            <div className='text-white italic bg-[#000000a4] lg:w-[50vw] p-5 w-full '>
                <div className='py-6'>
                    <input type="text" className='bg-transparent border-2 border-green-500 rounded-l-2xl w-[80%] h-8 px-2 outline-none'
                        value={todo} 
                        onChange={handleChange}
                    />
                    <button className='bg-green-600 h-8 px-3 font-semibold rounded-r-2xl translate-y-[-1px]'
                        onClick={handleAdd}>
                        Add
                    </button>
                </div>

                {
                    todos.map((item) => {
                        return (
                            <div key={item.id} className='flex w-full justify-between my-3'>
                                <div className='flex '>
                                    <input onChange={handleCheck} type="checkbox" className='mr-3' name={item.id} checked={item.iscompleted} />
                                    <p className={item.iscompleted ? 'line-through' : ''}>{item.todo}</p>
                                </div>
                                <div className=''>
                                    <button onClick={handleEdit}
                                    id={item.id} className='bg-green-600 rounded-xl px-3 font-semibold m-1'>
                                        Edit
                                    </button>
                                    <button onClick={handleRemove} id={item.id} className='bg-green-600 rounded-xl px-3 font-semibold m-1'>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default TodoList
