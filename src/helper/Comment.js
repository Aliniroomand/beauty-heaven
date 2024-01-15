import React from 'react';

const Comment = ({comment,name,time}) => {
    return (
        <div>
            <p>{comment}</p>
            <p>{name}</p>
            <p>{time}</p>
        </div>
    );
};

export default Comment;