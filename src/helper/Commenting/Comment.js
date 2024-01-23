import React, { useState } from 'react';

//components
import comments_storage from './Comments_storage';
import Action from './Action';
//styles 
import styles from "./Comment.module.css"
// IMAGES
import {ReactComponent as ArrowDown} from "../../assets/ArrowDown.svg"
import {ReactComponent as ArrowUp} from "../../assets/ArrowUp.svg"

const Comment = ({comment}) => {
    const[editMode,setEditMode]=useState(false);

    const[showInput,setShowInput]=useState(false);
    
const handleNewComment =()=>{
    setExpand(!expand);
    setShowInput(true)

}
       const[expand,setExpand]=useState(false) 

    const[input,setInput]=useState("")
    const onAddComment=()=>{};
    return (
        <div className={styles.mainContainer}>
            <div className={styles.commentsContainer}>
                {comment.id === 1 ?(
                    <div className={styles.comment}>
                    <input
                    className={styles.commentInput}
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='type your Comment ...'
                    />
                    <Action 
                        className={styles.commentText} 
                        type="comment"
                        handleClick={onAddComment}
                     />
                    {comments_storage?.item.map((cmnt) =>{
                        return <Comment className={styles.commentText}  key={cmnt.id} comment={cmnt} />;

                    })
                    }
                </div>
                ) : (
                    <>
                    <span className={styles.commentText} > {comment.name}</span>

                    <div style={{display:"flex" , marginTop:"5px"}}>
                        {editMode ?
                        (<>
                            <Action className={styles.button} type="SAVE" />
                            <Action 
                                className={styles.button} 
                                type="CANCEL" 
                                handleClick={()=>{setEditMode(false)}}
                            />

                        </> ) 
                        :(
                        <> 
                            <Action 
                                className={styles.button} 
                                type={                    
                                <>
                                {expand ? (
                                  <ArrowUp width="15px" height="15px" />
                                ) : (
                                  <ArrowDown width="15px" height="15px" />
                                )}{" "}
                                REPLY
                              </>
                            }
                                handleClick={handleNewComment}
                            />
                            <Action 
                                className={styles.button} 
                                type="EDIT"
                                handleClick={()=>{setEditMode(true)}}    
                            />

                            <Action className={styles.button} type="DELETE" />
                        </>
                        )}
                    </div>
                    </>
                )}
            </div>
            <div style={{paddingLeft:25 , display : expand ? "block" : "none"}}>
                {showInput && (
                    <div>
                        <input
                            type='text'
                            className='inputContainer'
                            onChange={(e)=>{setInput(e.target.value)}}
                        />
                        <Action className={styles.button} type="REPLY"/>
                        <Action 
                            className={styles.button} 
                            type="CANCEL"
                            handleClick={()=>{
                                setShowInput(false);
                            }}
                        />
                    </div>
                )

                }
            {comment?.item?.map((cmnt)=>{
                return <Comment key={cmnt.id} comment={cmnt} />;
            })}
            </div>
        </div>
    );
};

export default Comment;