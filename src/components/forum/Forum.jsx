import React, {useState, useEffect} from "react"; //To handle change, need to track the state of the input
import axios from "axios"

function Create(){

    const [input, setInput] = useState({ //will track the two fields, title and content
        title:'',
        content:''
    })

    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newThread = {
            title: input.title,
            content: input.content
        }
        axios.post('http://localhost:3001/create', newThread)
    }

    const [threads, setThreads] = useState([{
        title:'',
        content:''
    }])

    useEffect(() =>{
        fetch('/threads').then(res =>{
            if(res.ok){
                return res.json()
            }
        })
        .then(jsonRes => setThreads(jsonRes))
    })

    return <div className="container">
        <h1>Create Thread</h1>
        <form>
            <div class="form-group">
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder="Insert title here"></input>
            </div>

            <div class="form-group">
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="Insert content here"></textarea>
            </div>
            <button onClick={handleClick} className="btn btn-lg btn-info">Create Thread</button>
        </form>

        {threads.map(thread =>
            <div>
                <h2>{thread.title}</h2>
                <p>{thread.content}</p>
            </div>
            )}
    </div>
}

export default Create;