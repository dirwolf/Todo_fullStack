import axios from "axios";
import { useState } from "react";

function CreateTodo(){
    const [form,setForm]=useState({
        title:"",
        description:""
    });

    const submit=async ()=>{
        try {
            const response = await axios.post("http://localhost:3000/todo", {
              title: form.title,
              description: form.description,
            });
            console.log(response);
          } catch (error) {
            console.log(error);
          }
    }
    const updateVariable=(val)=>{
        const {name,value}=val.target;
        setForm({
            ...form,
            [name]:value
        });
    }

    console.log(form);

    return <div>
        <input 
        onChange={updateVariable}
        value={form.title}
        name="title"
        type="text" placeholder = "task" />
        <input 
        onChange={updateVariable}
        value={form.description}
        name="description"
        type = "text" placeholder = "title" />
        <br></br>
        <button onClick={submit} >Add a todo</button>
    </div>
}
export default CreateTodo;
