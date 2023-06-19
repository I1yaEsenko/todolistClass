import React from "react";
import {FilterType, TasksType} from "./App";

type PropsType = {
    title: string
    tasks: Array<TasksType>
    changeFilter: (value: FilterType) => void
    removeTask:(id:number) => void
}




export const Todolist = (props: PropsType) => {



    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((task) => {
                        return (
                            <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                                <button onClick={ () => {props.removeTask(task.id)} }>X</button>
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


