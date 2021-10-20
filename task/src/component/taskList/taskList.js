import React from 'react';
import Button from '../button/button.js';
import Card from '../card/card.js';

const taskList = (props) => {
    const deleteFunction = (e) => {
        let currentNode =e.target.parentNode.firstElementChild.innerHTML, index = props.taskList.indexOf(currentNode) ; 
        // if(e.target.parentNode !== undefined){
        //     e.target.parentNode.style.display = 'none'
        // } else {
        // e.target.parentNode.style.display = 'flex'
        // }
        props.taskList.splice(index,1);
        props.listhandler(props.taskList); 
        console.log(e.target.parentNode)
    }
    const cardDisplay = {
        display: 'flex'
    }
    return(
        <div className="task-list">
              {
            props.taskList.map((list,index) => {
                return  <div key={index} className="card-container">
                            <Card name={list} styl={cardDisplay}/>
                            <Button clickEvent={ deleteFunction } name="Delete"/>
                        </div>;
            })
            }
        </div>
    );
}
export default taskList;