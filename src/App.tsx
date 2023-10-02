import { Task } from './components/Task';
import {TaskForm} from './components/TaskForm'
import {useState} from 'react'
export function App() {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskForm/>
    </div>
  );
}
