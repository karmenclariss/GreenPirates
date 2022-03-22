import React, {useState} from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";
function CreatePost(){

    let navigate = useNavigate()
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
        navigate('/forum')
    }

    return(
        <div className="container">
            <h1>New Post</h1>
            <form>
                <div class="form-group">
                    <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder="Insert title here"></input>
                </div>
                <div class="form-group">
                    <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="Insert content here"></textarea>
                </div>
                <button  onClick={handleClick} className="btn btn-lg btn-info">Create Thread</button>
            </form>
        </div>
    )

}

export default CreatePost;