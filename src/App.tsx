import { useState } from "react";
import TaskInput from "../components/TaskInput"
import TaskItem from "../components/TaskItem"
import TaskList from "../components/TaskList"

function App() {
    return(
      <div className=" flex justify-center items-center flex-col m-20 gap-6">
        <TaskInput/>
        <TaskItem/>
        <TaskList/>
      </div>
    )
}

export default App;
