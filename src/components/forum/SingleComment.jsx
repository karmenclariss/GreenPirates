import React, { useState } from 'react'
import axios from 'axios'

function SingleComment(props) {

    
    const [OpenReply, setOpenReply] = useState("")
    const [CommentValue, setCommentValue] = useState({
        content:'',
    })
    const isTextareaDisabled = CommentValue.content.length===0

    function handleClick(event){
        event.preventDefault()
        const variable ={
            comment:CommentValue.content,
            threadId:props.threadId,
            responseTo:props.comment._id
        }
        
        axios.post('http://localhost:3001/api/comment/createComment', variable)
            .then(response =>{
                if(response.data.success){
                    console.log(response.data.result)
                    setOpenReply(!OpenReply)
                    props.refreshFunction(response.data.result)
                }
                else{
                    alert('Comment could not be posted')
                }
            })
    }

    function handleChange(event){
        const {name, value} = event.target
        setCommentValue(prevInput =>{
            return{
                ...prevInput,
                [name]:value
            }
        })
    }

    function actions(event){
        event.preventDefault()
        setOpenReply(!OpenReply)
    }
    
    return (
        <div>
            <div>{props.comment.comment}</div>
            <div className='comment-actions'>
                        <div onClick={actions} className="comment-action">Reply</div>
                        <div className="comment-action">Edit</div>
                        <div className="comment-action">Delete</div>
            </div>
            {OpenReply && (
            <form>
                <div>
                    <textarea onChange={handleChange} name="content" value={CommentValue.content} autoComplet="off"
                        className="comment-form-textarea" placeholder='Reply here'></textarea>
                </div>
                <button onClick={handleClick} className="comment-form-button comment-form-cancel-button" disabled={isTextareaDisabled}>Submit</button>
            </form>
            )}
        </div>
        
    )
}

export default SingleComment