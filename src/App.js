import { useState } from "react";
import Box from "./components/Box";
import Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState([]);
  const removeTodo = (id) => {
    console.log(id);
      const newTodos =  todos.filter(
        (d, index) => {
          if(index !== id)
          {
            return true
          } else{
            return false
          }
        }
      )
      setTodos(newTodos)
  }
  const addTodoHandler = (item) => {
      // console.log(item);
      setTodos(
        [
          ...todos,
          {
            item,
            time: new Date().toLocaleTimeString()
          }
        ]
      )
  }
  console.log(todos);
  return (
    <div className="bg-black h-screen p-3">
      <div className=" rounded mx-auto max-w-[750px] min-h-[550] shadow-2xl bg-white">
      <Input handler={addTodoHandler} />
      <Box data={todos} removeHandler={removeTodo}/>
      </div>
    </div>
  );
}

export default App;
