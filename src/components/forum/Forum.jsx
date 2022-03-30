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

    return <div className="item-container">
        <h1>Current Threads</h1>
        <Link to="/createPost" className="btn btn-primary">Create Post</Link>
        {currentPosts.map((currentPosts) =>(
            <div key={String(currentPosts._id)}>
                <Link to={`/thread/${String(currentPosts._id)}`}>{currentPosts.title}</Link>
                <p>{currentPosts.content}</p>
            </div>
        ))}
        <Pagination postPerPage={postPerPage} totalPosts={threads.length} paginate={paginate}/> 
        </div>
        

}

export default Forum;