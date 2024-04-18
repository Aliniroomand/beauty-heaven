import React, { useState } from 'react';

//components
import comments_storage from './Comments_storage';
import Comment from './Comment';
//hooks
import useNode from './hooks/useNode';


const CommentingPart = () => {
    const[commentsData,setCommentsData]=useState(comments_storage)

    // part for handling comments with custom hook that named Node //
    const {insertNode,editNode, deleteNode}=useNode();

    const handleInsertNode =(folderId , item) =>{
        const finalStructure=insertNode(commentsData,folderId,item);
        setCommentsData(finalStructure); 
    }
    const handleEditNode =(folderId , value) =>{
        const finalStructure=editNode(commentsData,folderId,value);
        setCommentsData(finalStructure); 
    }
    const handleDeleteNode =(folderId) =>{
        const finalStructure=deleteNode(commentsData,folderId);
        setCommentsData({...finalStructure}); 
    }
    return (
        <div>
            <Comment 
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode} 
                comment={commentsData} 
            />
        </div>
    );
};

export default CommentingPart;