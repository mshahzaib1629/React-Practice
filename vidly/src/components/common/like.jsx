import React, { Component } from 'react';

//Input: Liked or not: boolean
//Output: onClick


const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked)
        classes = classes + "-o";
    return (
        <i
            onClick={props.onLike}
            style={{ cursor: 'pointer' }}
            className={classes}
            aria-hidden="true">
        </i>);
}

export default Like;