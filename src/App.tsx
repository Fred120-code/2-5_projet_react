import { useState } from "react";
import TaskInput from "../components/TaskInput"
import TaskList from "../components/TaskList"

function App() {
    return(
      <div className=" w-[400px] flex justify-center items-center flex-col m-60 gap-6">
        <TaskInput/>
        <TaskList/>
      </div>
    )
}

export default App;
