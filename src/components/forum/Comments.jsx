import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import SingleComment from './SingleComment'
import ReplyComment from './ReplyComment'

function Comments(props) {


    useEffect(() => {
      
    }, [])
    
    const {id} = useParams()
    const [input,setInput] = useState({
    comment:''
    })
    const isTextareaDisabled = input.comment.length===0
    function handleChange(event){
        const {name,value} = event.target
        setInput((prevInput) =>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault()
        const newComment = {
            comment: input.comment,
            threadId: id,
        }
        axios.post('http://localhost:3001/api/comment/createComment', newComment)
         .then((response)=>{
            if(response.data.success){
                props.refreshFunction(response.data.result)
            }
            else{
                console.log('Failed to save comment')
            }
        })

    }

    return(
        <div>
            <br/>
            <p className='thread-form-title'> Comments </p>
            {console.log(props.CommentLists)}

            {props.CommentLists && props.CommentLists.map((comment,index) => (
            (!comment.responseTo && 
                <React.Fragment>
                    <SingleComment comment={comment} threadId={id} refreshFunction={props.refreshFunction}/>
                    <ReplyComment CommentLists={props.CommentLists} parentCommentId={comment._id} threadId={id}
                        refreshFunction={props.refreshFunction} />
                </React.Fragment>
            )))}

            {/* Root Comment Form */}
            <form>
                <div class="form-group">
                    <input onChange={handleChange} name="comment" value={input.comment} autoComplete="off" 
                        className="comment-form-textarea" placeholder="Insert Comment"/>
                </div> 
                <button  onClick={handleClick} className="comment-form-button"
                     disabled={isTextareaDisabled}>Comment</button>
            </form>
        </div>
    )
}

export default Comments 