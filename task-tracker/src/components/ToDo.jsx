import React from 'react'

function ToDo({task, key}) {
return (
    <div>
        <div className='flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg'>
            <div className='w-full flex flex-row justify-between'>
                <p className='font-semibold text-lg'>
                    {task.taskName}
                </p>
                <button>
                    Edit
                </button>
            </div>
            <p className='text-lg py-2'>
                {task.taskDescription}
            </p>
            <div className='w-full flex flex-row justify-end'>
                <button className='bg-red-500 text-white text-sm font-semibold py-1.5 px-3 rounded-lg'>
                    Delete
                </button>
            </div>
        </div>
    </div>
)
}

export default ToDo;