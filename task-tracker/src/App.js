import react, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";


function App() {
  return (
    <div className="">
        <h1 className="text-2xl font-bold py-4 pl-6">
          Task Tracker
        </h1>
      <div className="flex flex-row items-center">
        <p className="text-xl pl-6"> Click </p>
        <AddTask />
      <p className="text-xl my-2">to add a new Task</p>
      </div>
    </div>
  );
}

export default App;
