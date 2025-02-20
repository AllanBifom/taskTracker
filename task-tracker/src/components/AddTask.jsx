import React, { use } from 'react'
import { useState } from 'react'

function AddTask({taskList, setTaskList}) {
    const [addModal, setAddModal] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState ("");

    const handleAddTask = (e) => {
        e.preventDefault();
        if(!taskName){
            setErrorMessage("Enter Project name to continue");
        }
        else{
            let timeStamp = new Date().getTime();
            setTaskList([...taskList, {taskName, taskDescription, timeStamp: timeStamp}]);
            setErrorMessage("");
            setTaskName("");
            setTaskDescription("");
            setAddModal(false);
        }
    
    }
  return (
    <div>
        <button className='bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70'
                type = 'button'
                onClick={() => setAddModal(true)}
        >
            + New
        </button>
        {addModal ? (
            <div>
                <div className='flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100'>
                    <div className='w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col'>
                        <div className='flex flex-row justify-between p-5 border-b border-slate-200 rounded-t'>
                            <h3 className='text-3xl font-semibold'>Add new Task</h3>
                            <button className='px-1 text-gray-400 float-right text-3xl leading-none font-semibold block'
                                onClick={() => setAddModal(false)}
                            >
                                X
                            </button>
                        </div>
                        <form className='px-6 pt-6 pb-4'>
                            <div>
                                <label className='track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block'
                                    htmlFor='task-name'>
                                    Task Name
                                </label>
                                <input
                                    className='w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'
                                    id="task-name"
                                    type='text'
                                    name='taskName'
                                    value={taskName}
                                    placeholder='Task name'
                                    onChange={(e)=>{
                                        if (e.target.value === ""){
                                            setErrorMessage("Enter a Task name to continue");
                                        }else{
                                        setTaskName(e.target.value);
                                        setErrorMessage("");
                                        }
                                    }
                                    }
                                    required
                                />
                                <p className='text-red-500 text-center mt-2 mb-5'>{errorMessage}</p>
                            </div>
                            <div>
                                <label className='track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block'
                                    htmlFor='task-description'>
                                    Task Description
                                </label>
                                <textarea className='w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white'
                                    id="task-description"
                                    name='taskDescription'
                                    value={taskDescription}
                                    rows="5" 
                                    placeholder='Task description'
                                    onChange={(e)=>setTaskDescription(e.target.value)}/>
                            </div>
                            
                        </form>
                        <div className='flex justify-end p-6 border-t border-slate-200 rounded-b'>
                            <button className='bg-blue-500 text-white uppercase text-sm font-semibold px-6 py-3 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70'
                                    onClick={handleAddTask}>
                                Add Task
                            </button>
                        </div>
                    </div>    
                    
                </div>
            </div>
        ) : null}
    </div>
    )
}

export default AddTask;