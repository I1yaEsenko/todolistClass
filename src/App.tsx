import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./todolist";
import {v1} from 'uuid'

export type TasksType = {
    id: string
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
    // let tasks2 = [
    //     {id: 1, title: "Hello world", isDone: true},
    //     {id: 2, title: "I am Happy", isDone: false},
    //     {id: 3, title: "Yo", isDone: false}
    // ]

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Angular", isDone: false},
        {id: v1(), title: "VueJS", isDone: true},
        {id: v1(), title: "ReactNative", isDone: false}
    ],
        )

    let [filter, setFilter] = useState<FilterType>('All')

    const changeIsDone = (newId:string, newIsDone:boolean) => {
            setTasks(tasks.map(el=> el.id === newId ? {...el, isDone: newIsDone}:el))
    }

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
    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter((t) => t.id !== id)
        setTasks(filteredTasks)
    }

    //Добавление тасок
    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask,...tasks])
    }

    return (
        <div className="App">
            <Todolist changeFilter={changeFilter}
                      title={title1}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      addTask={addTask}
                      changeIsDone={changeIsDone}
            />

        </div>
    );
}

export default App;
