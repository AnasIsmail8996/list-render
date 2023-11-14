import { useState, useEffect } from 'react';
import './App.css';
import Task from './Task';

const Home = () => {
  const initialArry = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  const [tasks, setTasks] = useState(initialArry);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = [...tasks, { title, description, deleteTasks }];
    setTasks(updatedTasks);
    setTitle('');
    setDescription('');
  };

  const deleteTasks = (ind) => {
    const deleteList = tasks.filter((value, index) => index !== ind);
    setTasks(deleteList);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className='container'>
        <h1>Daily Gols</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button type='submit'>Gols</button>
        </form>
        {tasks.map((v, ind) => (
          <Task key={ind} title={v.title} description={v.description} deleteTasks={() => deleteTasks(ind)} ind={ind} />
        ))}
      </div>
    </>
  );
};

export default Home;
