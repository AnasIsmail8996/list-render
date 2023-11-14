
import './App.css'
const Task = ({title, description, deleteTasks, ind}) => {



  return (
    <div className="task">

<div className='texthide-p'>
    <p className="text-hide">{title}</p>
    <span className="text-hide">{description}</span>
</div>

<button onClick={()=>{deleteTasks(ind)}}>-</button>

    </div>
  )
}

export default Task;