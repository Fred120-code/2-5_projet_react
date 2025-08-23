import React from 'react'
import { Trash } from 'lucide-react'

const TaskItem = () => {
  return (
    <div className='bg-gray-700 rounded-2xl flex justify-between p-2 items-center w-1/2 h-[4rem]'>
      <div className='bg-gray-800 w-[90%] h-[3rem] rounded-xl p-2'>codage</div>
      <Trash className=' hover:text-red-500 cursor-pointer duration-300'/>
    </div>
  )
}

export default TaskItem