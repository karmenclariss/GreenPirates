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

    return(
        <div class="container">
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '20vh'}}>
        <h1 class="font-weight-light">Forum</h1>
        </div>

        <div class ="row">
        <div class="col-lg-10">
        <h3 style ={{fontFamily:'Playfield display',fontWeight:'bold', height:'10vh'}}> Current Threads</h3>
        </div>

        <div class="col-lg-2">
        <Link to="/createPost" className="btn btn-primary">Create Post</Link>
        </div>

        <div class="container">
        {threads.map((thread) =>(

            <div key={String(thread._id)}>
              <h3 style ={{fontFamily:'Arial',fontWeight:'bold'}}> 
                <Link to={`/thread/${String(thread._id)}`}>{thread.title}</Link>
              </h3>
                <p>{thread.content}</p>
            </div>
        ))}
        </div>
        </div>
      </div>
    )

}

export default Forum;