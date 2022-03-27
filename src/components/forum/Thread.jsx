import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


function Thread(){
    const {id} = useParams()

    const [data,setData] = useState({
        title:'',
        content:''
    })

    useEffect(() =>{
        fetch(`/threads/${id}`)
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
    }, [])

    return(
    <div>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
    </div>
    )
}

export default Thread;