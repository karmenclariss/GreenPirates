import React , {useEffect,useState} from 'react'
import SingleComment from './SingleComment'

function ReplyComment(props) {

    var [ChildCommentNumber, setChildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)
    
    useEffect(() => {
        var commentNumber = 0
        props.CommentLists.map((comment) =>{
            if(comment.responseTo === props.parentCommentId){
                commentNumber++
            }
        })
        setChildCommentNumber(commentNumber)
        console.log(ChildCommentNumber)
    }, [props.CommentLists,props.parentCommentId])
    
    

    let renderReplyComment = (parentCommentId) =>
        props.CommentLists.map((comment,index) =>(
            <React.Fragment>
                {comment.responseTo === parentCommentId && 
                    <div className='child-comment-width'>
                    <SingleComment comment={comment} threadId={props.threadId} refreshFunction={props.refreshFunction}/>
                    <ReplyComment CommentLists={props.CommentLists} parentCommentId={comment._id} threadId={props.threadId}
                        refreshFunction={props.refreshFunction}/>
                    </div>
                }
            </React.Fragment>
        ))
    
    function handleChange(event){
        event.preventDefault()
        setOpenReplyComments(!OpenReplyComments)
        console.log(`There are ${ChildCommentNumber}`)
        setChildCommentNumber(ChildCommentNumber++)
    }
    return (
        <div>
            {ChildCommentNumber > 0 &&
                <p className='view-comment-text' onClick={handleChange} >
                    View {ChildCommentNumber} more comment(s)
                </p>
            }

            {OpenReplyComments && 
                renderReplyComment(props.parentCommentId)
            }
        </div>
    )
}

export default ReplyComment