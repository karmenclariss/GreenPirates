import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SingleComment(props) {
    const [EditCommentValue, setEditCommentValue] = useState({
        content:props.comment.comment,
    })
    const [CanEdit, setCanEdit] = useState(false)
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
                    setOpenReply(!OpenReply)
                    props.refreshFunction(response.data.result)
                    // console.log(response)
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

    function enableReply(event){
        event.preventDefault()
        setOpenReply(!OpenReply)
    }
    
    let index=0
    function deleteComment(comment){
        for (let i = 0; i<props.CommentLists.length; i++){
            if(props.CommentLists[i]._id === comment._id){
                index = i
            }
        }
        console.log("Before splice length", props.CommentLists.length)
        props.CommentLists.splice(index,1)
        console.log("After splice length", props.CommentLists.length)
    }

    function deleteReply(event){
        event.preventDefault()
        axios.delete('http://localhost:3001/api/comment/deleteComment', {data: {
            commentId: props.comment._id}
        })
            .then((response) =>{
                if(response.data.success){
                    alert("Comment has been successfully deleted")
                    
                }
                else{
                    alert("There was an error deleting the comment")
                }
            })
        deleteComment(props.comment)
    }

    function editComment(event){
        const {name, value} = event.target
        setEditCommentValue((prevInput) =>{
            return{
                ...prevInput,
                [name]:value
            }
        })
    }

    function updateComment(event){
        event.preventDefault()
        const updateComment = {
            content: EditCommentValue.content,
            commentId: props.comment._id
        }
        axios.post('http://localhost:3001/api/comment/updateComment', updateComment)
            .then((response) => {
                if(response.data.success){
                    alert("Comment edited successfully")
                }
                else{
                    alert("Comment edit failed")
                }
            })
    }


    function editReply(event){
        event.preventDefault()
        setCanEdit(!CanEdit)
    }

    return (
        
        <div>
            <div>{props.comment.comment}</div>
            <div className='comment-actions'>
                        <div onClick={enableReply} className="comment-action">Reply</div>
                        <div onClick={editReply} className="comment-action">Edit</div>
                        <div onClick={deleteReply} className="comment-action">Delete</div>
            </div>
            {OpenReply && (
            <form>
                <div>
                    <textarea onChange={handleChange} name="content" value={CommentValue.content} autoComplete="off"
                        className="comment-form-textarea" placeholder='Reply here'></textarea>
                </div>
                <button onClick={handleClick} className="comment-form-button comment-form-cancel-button" disabled={isTextareaDisabled}>Submit</button>
            </form>
            )}

            {CanEdit &&  (
                <form>
                    <div>
                        <textarea  onChange={editComment} name="content" value={EditCommentValue.content} autoComplete="off"
                            className="comment-form-textarea"></textarea>
                    </div>
                    <button onClick={updateComment} className="comment-form-button comment-form-cancel-button">Submit</button>
                </form>
            )
            }

        </div>
        
    )
}

export default SingleComment