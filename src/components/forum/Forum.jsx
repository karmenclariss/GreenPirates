import React, {useState, useEffect} from "react"; //To handle change, need to track the state of the input
import {Link} from "react-router-dom";
import Pagination from './Pagination';


function Forum(){

    const [threads, setThreads] = useState([{
        title:'',
        content:''
    }])

    const[pageNumber,setPageNumber] = useState(1)
    const[postPerPage] = useState(10)

    useEffect(() =>{
        fetch('/api/thread/getThread')
         .then(res =>{
            if(res.ok){
                return res.json()
            }
        })
        .then(jsonRes => setThreads(jsonRes))
    }, [])

    const indexOfLastPost = pageNumber * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = threads.slice(indexOfFirstPost, indexOfLastPost)
    
    function paginate(pageNumber){
        setPageNumber(pageNumber)
    }

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
        {currentPosts.map((thread) =>(

            <div key={String(thread._id)}>
              <h3 style ={{fontFamily:'Arial',fontWeight:'bold'}}> 
                <Link to={`/thread/${String(thread._id)}`}>{thread.title}</Link>
              </h3>
                <p>{thread.content}</p>
            </div>
        ))}
        <Pagination postPerPage={postPerPage} totalPosts={threads.length} paginate={paginate}/> 
        </div>
        </div>
      </div>
    )

}

export default Forum;