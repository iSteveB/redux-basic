import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, editPost } from '../actions/post.action';
import Like from './Like';
import { isEmpty } from './Utils';

const Post = ({ post }) => {
    const [editToggle, setEditToggle] = useState(false);
    const [editContent, setContent] = useState(post.content);

    const dispatch = useDispatch();

    const user = useSelector((state) => state.userReducer);

    const handleEdit = (e) => {
        e.preventDefault();

        const postEditedData = {
            title: post.title,
            author: user[0].pseudo,
            content: editContent,
            likes: post.likes,
            id: post.id,
        };
        dispatch(editPost(postEditedData));
        setEditToggle(false);
    };

    return (
        <div className='post'>
            {!isEmpty(user[0]) && user[0].pseudo === post.author && (
                <div className='edit-delete'>
                    <img
                        onClick={() => setEditToggle(!editToggle)}
                        src='./icons/edit.svg'
                        alt='edit'
                    />
                    <img src='./icons/delete.svg' alt='delete' onClick={() => dispatch(deletePost(post.id))}/>
                </div>
            )}
            <h2>{post.title}</h2>
            <img
                src='https://picsum.photos/1500/400'
                className='post-img'
                alt='img-post'
            />

            {editToggle ? (
                <form action='post' onSubmit={(e) => handleEdit(e)}>
                    <textarea
                        type='text'
                        defaultValue={post.content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <input type='submit' value='Valider les modifications' />
                </form>
            ) : (
                <p>{post.content}</p>
            )}

            <div className='author'>
                <h5>{post.author}</h5>
                <Like post={post} />
            </div>
        </div>
    );
};

export default Post;
