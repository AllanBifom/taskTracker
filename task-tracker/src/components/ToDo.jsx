import React, {useState} from 'react'
import EditTask from './EditTask';

function ToDo({task, index, taskList, setTaskList}) {
return (
    <div>
        <div className='flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg'>
            <div className='w-full flex flex-row justify-between'>
                <p className='font-semibold text-lg'>
                    {task.taskName}
                </p>
                <EditTask task={task} index={index } taskList={taskList} setTaskList={setTaskList}/>
            </div>
            <p className='text-lg py-2'>
                {task.taskDescription}
            </p>
            <div className='w-full flex flex-row justify-end'>
                <button className='bg-red-500 text-white text-sm font-semibold py-1.5 px-3 mt-6 mb-1 rounded-lg'>
                    Delete
                </button>
            </div>
        </div>
    </div>
)
}

export default ToDo;