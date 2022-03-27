import React, {useState, useEffect} from "react"; //To handle change, need to track the state of the input
import {Link} from "react-router-dom";

function Forum(){

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
    }, [])

    return <div className="item-container">
        <h1>Current Threads</h1>
        <Link to="/createPost" className="btn btn-primary">Create Post</Link>
        {threads.map((thread) =>(
            <div key={String(thread._id)}>
                <Link to={`/thread/${String(thread._id)}`}>{thread.title}</Link>
                <p>{thread.content}</p>
            </div>
        ))}
        </div>

}

export default Forum;