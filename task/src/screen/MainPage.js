import  React, { useEffect }  from 'react';
import './MainPage.css'
import Button from '../component/button/button.js';
import { useState } from 'react';
import TaskList from '../component/taskList/taskList.js'

const MainPage = () => {
const [taskList, setTaskList] = useState([]);
const [task, setTask] = useState();
function taskHandler(value){
    console.log(value)
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
const addFunction = (e) => {
    if(task !== undefined) {
        taskListHandler(task);
        e.target.value = "";
    } else {
        alert("Must Enter Task");
    }
}

const taskPress = (key) => {
    if(key.charCode === 13)
    addFunction(key);
}
    return(
        <div className="main-container">
            <div className="input-container">
                <input type="text" placeholder="Add Task"  onChange={(e) => taskHandler(e.target.value)} onKeyPress={(e) => taskPress(e)}/>
                <Button name="Add" clickEvent={addFunction}/>
            </div>
            <TaskList taskList={taskList} listhandler={taskListHandler}/>
        </div>
    );
}

export default  MainPage;