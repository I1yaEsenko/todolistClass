import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./todolist";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterType = 'All' | 'Active' | 'Completed'

function App() {

    const title1 = 'What to learn'
    const title2 = 'How are you?'


    // let tasks1 = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false}
    // ]
    let tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ],
        )

    let [filter, setFilter] = useState<FilterType>('All')

    // Фильтрация тасок по кнопкам

    let tasksForTodolist = tasks

    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter( (f) => f.isDone  )
    }
    if (filter === 'Active') {
        tasksForTodolist = tasks.filter( (f) => f.isDone === false  )
    }
    let changeFilter = (value: FilterType) => {
        setFilter(value)
    }

    //Удаление тасок по Х
    let removeTask = (id: number) => {
        let filteredTasks = tasks.filter((t) => t.id !== id)
        setTasks(filteredTasks)
    }


    return (
        <div className="App">
            <Todolist changeFilter={changeFilter}
                      title={title1}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
            />
            <Todolist changeFilter={changeFilter}
                      title={title2}
                      tasks={tasks2}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
