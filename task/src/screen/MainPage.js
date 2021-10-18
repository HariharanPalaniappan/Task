import  React  from 'react';
import './MainPage.css'
import Card from '../component/card/card.js'
import Button from '../component/button/button.js';
import { useState } from 'react';

const MainPage = () => {
const [taskList, setTaskList] = useState([]);
const [task, setTask] = useState();
function taskHandler(value){
    setTask(value);
}
function taskListHandler(value) {
    var x = typeof(value)
    if(x === "string") {
        setTaskList([...taskList, value]);
    }else{
        setTaskList(value);
    }
}
const addFunction = () => {
    if(task !== undefined) {
        taskListHandler(task);
    } else {
        alert("Must Enter Task");
    }
}
const deleteFunction = (e) => {
    let currentNode =e.target.parentNode.firstElementChild.innerHTML, index = taskList.indexOf(currentNode) ; 
    console.log(task);
    taskList.splice(index,1);
    taskListHandler(taskList); 
}
    return(
        <div className="main-container">
            <div className="input-container">
                <input type="text" placeholder="Add Task"  onChange={(e) => taskHandler(e.target.value)}/>
                <Button name="Add" clickEvent={addFunction}/>
            </div>
            <div className="task-list">
                {
            taskList.map((list,index) => {
                return  <div key={index} className="card-container">
                            <Card name={list}/>
                            <Button clickEvent={ deleteFunction } name="Delete"/>
                        </div>;
            })
            }</div>
        </div>
    );
}

export default  MainPage;