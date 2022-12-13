import React , { useState } from "react";
function App() {
  const [inputText,setinputText] = useState("");
  const [items,setItems] = useState([]);
  function handleChange(event){
    const newValue = event.target.value;
    setinputText(newValue);
  }
  function addItem(){
      setItems(preVal => {
        return[
          ...preVal,inputText
        ]
      });
      setinputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="input" onChange= {handleChange} 
        value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            items.map(todoItem =>{
                return <li>{todoItem}</li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
