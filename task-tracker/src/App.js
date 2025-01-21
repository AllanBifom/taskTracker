import react, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import ToDo from "./components/ToDo";


function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList)
  return (
    <div className="">
        <h1 className="text-2xl font-bold py-6 pl-6">
          Task Tracker
        </h1>
      <div className="flex flex-row items-center">
        <p className="text-xl pl-6"> Click </p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
      <p className="text-xl my-2">to add a new Task</p>
      </div>
      <div>
        <h2 className="ml-6 text-xl w-3/4 font-semibold max-w-lg my-4 py-2 px-4 bg-gray-200">TO DO:</h2>
      {taskList.slice(0).reverse().map((task, i) => {
        return(
        <div>
          <ToDo key={new Date().getTime()} task={task} index={i} taskList={taskList} setTaskList={setTaskList}/>
          
        </div> 
        )
      })}
      </div>
    </div>
  );
}

export default App;
