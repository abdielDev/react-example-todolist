import { useState } from "react"

function App() {
  const initialState = ['Barrer', 'Lavar trastes']
  const [todoList, setTodoList] = useState(initialState)
  const handleAddTodo = () => {
    console.log("Click!")
  }
  return (
    <>
      <h1>Todo List</h1>
      <input type="text" placeholder="Nueva tarea" />
      <button onClick={() => handleAddTodo()}>Añadir</button>
      <ul>
        {todoList.map((el) => <li>{el}</li>)}
      </ul>
    </>
  )
}

export default App
