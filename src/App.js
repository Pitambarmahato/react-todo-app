import React, { useState } from 'react';
import './App.css';

const App = () =>{
  const [item, setItem] = useState("")
  const [arr, setArr] = useState([]);

  const itemHandler = (e) =>{
    setItem(e.target.value)
  }

  const itemSubmit = (e) =>{
    e.preventDefault()
    if(item !== ""){
      setArr((oldItems) => {
        return [...oldItems, item];
      })
    setItem("")
    }
    
  }
  return(
      <>
        <div className="main_div">
          <div className="center_div">
            <br />
            <h1>Todo List</h1>
            <br />
            <input type="text" placeholder="Add a todo item" value={item} onChange={itemHandler}/>
            <button onClick = { itemSubmit }>+</button>

            <ol>
              {/* <li>{item}</li> */}
              {
                arr.map( (arrval) => {
                  return <li>{ arrval }</li>
                })
              }
            </ol>
          </div>
        </div>
      </>
  )
  
}

export default App;