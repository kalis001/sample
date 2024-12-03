import React from 'react'
import { useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import ContextDisp1 from './ContextDisp1';
import ContextDisp2 from './ContextDisp2';
import { createContext } from 'react';

export const dataContext = createContext();

export default function DataContext() {

    const [data,setData] = useState("");
    const [todos, setTodos] = useState([]);

    function handleAddTodo(){
      setTodos([
        ...todos,
        data
      ]);
    }
    
  return (
    <div>
        <label htmlFor="">Todos</label>
        <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}} name="" id="" />
        <button onClick={handleAddTodo}>Add Todos</button>

        <Link to={'/d1'}>Disp 1</Link>
        <Link to={'/d2'}>Disp 2</Link>

        <dataContext.Provider value={todos}>
          <RouterPage />
        </dataContext.Provider>

    </div>
  )
}


function RouterPage(){
  return(
    <div>
      <Routes>
        <Route path='/d1' element={<ContextDisp1/>}/>
        <Route path='/d2' element={<ContextDisp2/>}/>
      </Routes>
    </div>
  )
}