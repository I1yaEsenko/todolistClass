import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import {FilterType, TasksType} from "./App";

type PropsType = {
    title: string
    tasks: Array<TasksType>
    changeFilter: (value: FilterType) => void
    removeTask: (id: string) => void
    addTask: (title: string) => void
}


export const Todolist = (props: PropsType) => {
    // localstate for newtitle todolist
    let [newTaskTitle, setNewTaskTitle] = useState('')
    // считывание значение input
    let changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    //передача title в функцию addtask и обнуление value поля input
    let addTaskHandler = () => {
        {
            props.addTask(newTaskTitle)
        }
        setNewTaskTitle('')
    }


    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input onChange={changeHandler} value={newTaskTitle}/>
                    <button onClick={addTaskHandler}>+</button>
                </div>
                <ul>
                    {props.tasks.map((task) => {

                        const onRemoveHandler = () => {
                            props.removeTask(task.id)
                        }
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <button onClick={onRemoveHandler}>X
                                </button>
                            </li>

                        )
                    })}

                </ul>
                <div>
                    <button onClick={() => {
                        props.changeFilter('All')
                    }}>All
                    </button>
                    <button onClick={() => {
                        props.changeFilter('Active')
                    }}>Active
                    </button>
                    <button onClick={() => {
                        props.changeFilter('Completed')
                    }}>Completed
                    </button>
                </div>
            </div>
        </>
    )
}


