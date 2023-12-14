import React,{ useState } from "react";
const Form = ()=>{
    const [task, setTask] = useState("");
    const [arg, setArg] = useState([]);
  
    const addHandle = (event)=>{
        setArg([...arg, task])
        setTask("")
        console.log(arg);
    }
    const onChangeHandler = (event)=>{
        setTask(event.target.value);
        console.log(task);
    }
    return( 
        <>
            <h1>To Do List</h1>
            <div className="form">
                <input type="text" value={task} onChange={onChangeHandler}/>
                <button onClick={addHandle}>Add Task</button>
            </div>
            <div className="tasks">
                <ul> 
                {
                        arg.map((e,i) => {
                        return <li key={i}>{e}</li>;
                    })
                }
                </ul>
            </div>
        </>
    )
}
export default Form;