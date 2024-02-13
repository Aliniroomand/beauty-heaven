import React, { useEffect, useRef, useState } from 'react';

//components
import Action from './Action';
//styles 
import styles from "./Comment.module.css"
// IMAGES
import {ReactComponent as ArrowDown} from "../../assets/ArrowDown.svg"
import {ReactComponent as ArrowUp} from "../../assets/ArrowUp.svg"

const Comment = ({comment ,handleInsertNode,handleEditNode,handleDeleteNode}) => {
    const[editMode,setEditMode]=useState(false);
    const[showInput,setShowInput]=useState(false);
    const[expand,setExpand]=useState(false) 
    const[input,setInput]=useState("");
    const inputRef= useRef(null);

const handleNewComment =()=>{
    setExpand(!expand);
    setShowInput(true)
};
const onAddComment=()=>{
    if (editMode){
        handleEditNode(comment.id,inputRef?.current?.innerText)
    }else{
        setExpand(true);
        handleInsertNode(comment.id , input);
        setShowInput(false);
        setInput("");
    }
    if (editMode) {setEditMode(false)}
};

useEffect(()=>{
    inputRef?.current?.focus();
},[editMode])
const handleDelete = ()=>{
    handleDeleteNode(comment.id)
};



    return (
        <div className={styles.mainContainer}>
            <div className={styles.commentsContainer}>
                {comment.id === 1 ?(
                    <div className={styles.comment}>
                    <div className={styles.commentInputContainer}>
                        <input
                        className={styles.commentInput}
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='type your Comment ...'
                        />
                        <Action 
                            className={styles.commentingBTN} 
                            type="add your comment"
                            handleClick={onAddComment}
                        />
                     </div>
                   
                </div>
                ) : (
                    <>
                    <span suppressContentEditableWarning>
                    <span 
                        className={styles.commentText}
                        contentEditable={editMode}
                        ref={inputRef}
                        key={comment.id}
                    > 
                        {comment.name}
                    </span>
                    </span>

                    <div style={{display:"flex" , marginTop:"5px"}}>
                        {editMode ?
                        (<>
                            <Action 
                                className={styles.button}
                                type="SAVE"
                                handleClick={onAddComment} 
                            />
                            <Action 
                                className={styles.button} 
                                type="CANCEL" 
                                handleClick={()=>{
                                    if(inputRef.current)
                                    inputRef.current.innerText=comment.name;
                                    setEditMode(false)
                                }}
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

                            <Action 
                                className={styles.button} 
                                type="DELETE" 
                                handleClick={handleDelete}
                            />
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
                        <Action className={styles.button} 
                            type="REPLY"
                            handleClick={onAddComment}
                        />
                        <Action 
                            className={styles.button} 
                            type="CANCEL"
                            handleClick={()=>{
                                setShowInput(false);
                                if(!comment?.items?.length) setExpand(false);
                            }}
                        />
                    </div>
                )

                }
            {comment?.items?.map((cmnt)=>{
                return(
                    <Comment 
                    key={cmnt.id}
                    comment={cmnt} 
                    handleInsertNode={handleInsertNode}
                    handleEditNode={handleEditNode}
                    handleDeleteNode={handleDeleteNode} 
                />);
            })}
            </div>
        </div>
    );
};

export default Comment;