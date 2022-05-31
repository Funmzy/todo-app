import React from 'react'
import { todo } from '../../App'
import './result.css'


interface IProp {

    deleteChecked : () => void
    todos : todo[]
}

const Result: React.FC<IProp> = ({
    todos,
    deleteChecked
}) => {

    const handleDelete = ()  => {
        deleteChecked()
    }

    const checked = todos.filter((todo) => todo.done === true)

  return (
    <div className='result'>
        <div className='result-track'>
            {checked.length} of {todos.length} tasks done
        </div>
        <button className='remove-button' onClick={handleDelete} >
            Remove checked *
        </button>
    </div>
  )
}

export default Result
