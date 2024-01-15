import React, { useState ,useEffect } from 'react';

//Styles

import styles from "./Commenting.module.css"

//
import Comment from './Comment';




const Commenting = ({id}) => {
const [name,setName]=useState("");
const [comment,setComment]=useState("");

const [wholeComments,setWholeComments]=useState([]);


// for time of commenting
let currentDate=new Date();
let currentHour = currentDate.getHours();
let now = currentDate.toDateString();
let time=[`Hours:${currentHour}----Date:${now}`]

//__________________________

useEffect(() => {
    const storedComments =
     localStorage.getItem(`comments_${id}`);
    if (storedComments) {
      setWholeComments(JSON.parse(storedComments));
    }
  }, [id]);

const handleSubmit=(e)=>{
e.preventDefault();
const newComment={
    time:time.toString(),
    id:id,
    name:name,
    comment:comment
    };
const updatedComments = [...wholeComments, newComment];
setWholeComments(updatedComments);
localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
setName("");
setComment("");
};




    return (
        <div className={styles.container}>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="name">Name:</label>
                  <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div>
              <label htmlFor="comment">Comment:</label>
              <textarea
              id='comment'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
              ></textarea>
              </div>
          <button type="submit">Submit</button>
        </form>
          <div className={styles.wholeComments}>
          {wholeComments.map((i)=>{
             <Comment 
             key={i.time}  
             comment={i.comment}
             name={i.name}
             time={i.time}
             />
              })
          }
          </div>
      </div>
    );
  };

export default Commenting;