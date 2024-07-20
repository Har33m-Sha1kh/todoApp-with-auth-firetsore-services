import { useState } from "react"
import Navbar from "./Components/Navbar"
import TodoList from "./Components/TodoList"



function App() { 

  const [isloggedIn, setisloggedIn] = useState(false),
        [id,setId]=useState("");

  return (
    <div style={{ backgroundImage: "url(src/assets/backgroungImg.jpg)" }} className="min-h-[100vh] bg-no-repeat bg-cover bg-right">

      <Navbar status={setisloggedIn} setID={setId}/>
      <TodoList ID={id}/>

    </div>
  )
}

export default App
