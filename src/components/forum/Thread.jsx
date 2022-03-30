import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Comments from './Comments'


function Thread(){
    const {id} = useParams()
    const [CommentLists,setCommentLists] = useState([])
    const [data,setData] = useState({
        title:'',
        content:''
    })
    const threadId = {
        threadId:id
    }

    useEffect(() =>{
        fetch(`http://localhost:3001/api/thread/${id}`)
         .then((res) =>{
             if(res.ok){
                 return res.json()
             }
         })
         .then((foundThread) => {
             let text = {
                 title: foundThread.title,
                 content: foundThread.content
             }
             setData(text)
         })

        axios.post("http://localhost:3001/api/comment/getComment",threadId)
         .then((response)=>{
             if(response.data.success){
                 setCommentLists(response.data.comments)
             }
             else{
                 alert('Failed to get comments')
             }
         })
    }, [CommentLists.length])

    function updateComment(incomingComment){
        setCommentLists(CommentLists.concat(incomingComment))
    }

    return(
    <div>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <Comments CommentLists={CommentLists} refreshFunction={updateComment} key={id}/>
    </div>
    )
}

export default Thread;