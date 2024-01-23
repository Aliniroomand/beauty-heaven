import React, { useState } from 'react';

//components
import comments_storage from './Comments_storage';
import Comment from './Comment';

const CommentingPart = () => {
    const[commentsData,setCommentsData]=useState(comments_storage)
    return (
        <div>
            <Comment comment={commentsData} />
        </div>
    );
};

export default CommentingPart;