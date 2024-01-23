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
                <>
                    <input
                    className={styles.commentInput}
                    type='text'
                    autoFocus
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='type your Comment ...'
                    />
                    <Action 
                        className=""
                        type="comment"
                        handleClick={onAddComment}
                     />
                    {comments_storage?.item.map((cmnt) =>{
                        return <Comment key={cmnt.id} comment={cmnt} />;
                    })
                    }
                </>
                ) : (
                    <>
                    <span style={{wordWrap:"break-word"}}> {comment.name}</span>

                    <div style={{display:"flex" , marginTop:"5px"}}>
                        {editMode ?
                        (<>
                            <Action className="reply" type="SAVE" />
                            <Action 
                                className="reply" 
                                type="CANCEL" 
                                handleClick={()=>{setEditMode(false)}}
                            />

                        </> ) 
                        :(
                        <> 
                            <Action 
                                className="reply"
                                type={                    
                                <>
                                {expand ? (
                                  <ArrowUp width="10px" height="10px" />
                                ) : (
                                  <ArrowDown width="10px" height="10px" />
                                )}{" "}
                                REPLY
                              </>
                            }
                                handleClick={handleNewComment}
                            />
                            <Action 
                                className="reply" 
                                type="EDIT"
                                handleClick={()=>{setEditMode(true)}}    
                            />

                            <Action className="reply" type="DELETE" />
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
                            autoFocus
                            onChange={(e)=>{setInput(e.target.value)}}
                        />
                        <Action className="reply" type="REPLY"/>
                        <Action 
                            className="reply" 
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