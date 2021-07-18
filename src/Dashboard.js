import { useState } from "react";
import React from 'react';
import { v4 as uuid } from 'uuid';

const Dashboard = () => {

    const [posts, setPosts] = useState([
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', likes: 0, dislikes: 0, id: 1 },
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', likes: 0, dislikes: 0, id: 2 },
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', likes: 0, dislikes: 0, id: 3 }
    ]);

    const [content, setContent] = useState('');

    const handleshare = (e) => {
        e.preventDefault();
        setPosts([...posts, { content: content, likes: 0, dislikes: 0, id: uuid() }]);
        setContent('');
        document.getElementsByClassName('confirm-share-popup')[0].style.visibility = "hidden";
        document.getElementsByClassName('confirm-share-popup')[0].style.opacity = "0";
    }
    const [myid, setMyid] = useState('');

    const handledelete = (id) => {
        const newpost = posts.filter(post => post.id !== id);
        setPosts(newpost);
        document.getElementsByClassName('confirm-delete-popup')[0].style.visibility = "hidden";
        document.getElementsByClassName('confirm-delete-popup')[0].style.opacity = "0";
    }

    const handleedit = (id) => {
        const newpost = posts.filter(post => post.id !== id);
        setPosts([...newpost, { content: content, likes: 0, dislikes: 0, id: uuid() }]);
        setContent('');
        document.getElementsByClassName('submit-edit')[0].style.visibility = "hidden";
        document.getElementsByClassName('submit-edit')[0].style.opacity = "0";
        document.getElementsByClassName('submit-share')[0].style.visibility = "visible";
        document.getElementsByClassName('submit-share')[0].style.opacity = "1";
        document.getElementsByClassName('cancel-edit')[0].style.visibility = "hidden";
        document.getElementsByClassName('cancel-edit')[0].style.opacity = "0";
    }

    const [like, setLike] = useState(0);
    const [unlike, setUnlike] = useState(0);

    return (
        <div className="dashboard-main-page">
            <div className="dashboard-main-content">
                <div className="alert-show"></div>
                <form className="dash-form" autoComplete="off">
                    <input type="text" id="something" className="something" placeholder="Share Your Thoughts" value={content} spellCheck="false" onChange={(e) => { setContent(e.target.value) }} />
                    <button className="submit-new-dash submit-share" onClick={(e) => {
                        e.preventDefault();
                        document.getElementsByClassName('confirm-share-popup')[0].style.visibility = "visible";
                        document.getElementsByClassName('confirm-share-popup')[0].style.opacity = "1";
                    }}>Share</button>
                    <button className="submit-new-dash submit-edit" onClick={(e) => {
                        e.preventDefault();
                        document.getElementsByClassName('confirm-edit-popup')[0].style.visibility = "visible";
                        document.getElementsByClassName('confirm-edit-popup')[0].style.opacity = "1";
                    }}>Edit</button>
                    <button className="cancel-edit" onClick={(e) => {
                        e.preventDefault();
                        document.getElementsByClassName('submit-share')[0].style.visibility = "visible";
                        document.getElementsByClassName('submit-share')[0].style.opacity = "1";
                        document.getElementsByClassName('submit-edit')[0].style.visibility = "hidden";
                        document.getElementsByClassName('submit-edit')[0].style.opacity = "0";
                        document.getElementsByClassName('cancel-edit')[0].style.visibility = "hidden";
                        document.getElementsByClassName('cancel-edit')[0].style.opacity = "0";
                        setContent('');
                    }}>Cancel</button>
                </form>
                <div className="dash-posts">
                    {posts.map((post) => (
                        <div className="dash-post" key={post.id}>
                            <button className="edit-post" onClick={() => {
                                setContent(post.content);
                                document.getElementsByClassName('submit-share')[0].style.visibility = "hidden";
                                document.getElementsByClassName('submit-share')[0].style.opacity = "0";
                                document.getElementsByClassName('submit-edit')[0].style.visibility = "visible";
                                document.getElementsByClassName('submit-edit')[0].style.opacity = "1";
                                document.getElementsByClassName('cancel-edit')[0].style.visibility = "visible";
                                document.getElementsByClassName('cancel-edit')[0].style.opacity = "1";
                                setMyid(post.id);
                            }}>Edit</button>
                            <button className="delete-post" onClick={() => {
                                document.getElementsByClassName('confirm-delete-popup')[0].style.visibility = "visible";
                                document.getElementsByClassName('confirm-delete-popup')[0].style.opacity = "1";
                                setMyid(post.id);
                            }}>Delete</button>
                            <h1 className="dash-username">Professor</h1>
                            <div className="content-para">{post.content}</div>
                            <span className="like" onClick={()=>{
                                if(like === 0 && unlike===0){
                                    setLike(1);
                                }
                                else if(like === 0 && unlike===1){
                                    setUnlike(0);
                                    setLike(1);
                                }
                                else if(like === 1 && unlike===0){
                                    setLike(0);
                                }
                            }}>Like </span>
                            <span className="like-span">{like}</span>
                            <span className="dislike" onClick={()=>{
                                if(unlike === 0 && like===0){
                                    setUnlike(1);
                                }
                                else if(unlike===0 && like===1){
                                    setUnlike(1);
                                    setLike(0);
                                }
                                else if(unlike === 1 && like===0){
                                    setUnlike(0);
                                }
                            }}>Dislike </span>
                            <span className="dislike-span">{unlike}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="confirm-popup confirm-delete-popup">
                <div className="alert-message">
                    <h1 className="alert-heading">Alert Message</h1>
                    <h2 className="alert-reason">Delete the post</h2>
                    <div className="alert-buttons">
                        <button className="yes-button" onClick={() => {
                            handledelete(myid);
                            document.getElementsByClassName("alert-show")[0].innerHTML = "Post Deleted Successfully";
                        }}>Yes</button>
                        <button className="no-button" onClick={() => {
                            document.getElementsByClassName('confirm-delete-popup')[0].style.visibility = "hidden";
                            document.getElementsByClassName('confirm-delete-popup')[0].style.opacity = "0";
                        }}>No</button>
                    </div>

                </div>

            </div>
            <div className="confirm-popup confirm-edit-popup">
                <div className="alert-message">
                    <h1 className="alert-heading">Alert Message</h1>
                    <h2 className="alert-reason">Edit the post</h2>
                    <div className="alert-buttons">
                        <button className="yes-button" onClick={() => {
                            handleedit(myid);
                            document.getElementsByClassName('confirm-edit-popup')[0].style.visibility = "hidden";
                            document.getElementsByClassName('confirm-edit-popup')[0].style.opacity = "0";
                            document.getElementsByClassName("alert-show")[0].innerHTML = "Post Editted Successfully";
                        }}>Yes</button>
                        <button className="no-button" onClick={() => {
                            document.getElementsByClassName('confirm-edit-popup')[0].style.visibility = "hidden";
                            document.getElementsByClassName('confirm-edit-popup')[0].style.opacity = "0";
                        }}>No</button>
                    </div>

                </div>

            </div>
            <div className="confirm-popup confirm-share-popup">
                <div className="alert-message">
                    <h1 className="alert-heading">Alert Message</h1>
                    <h2 className="alert-reason">Share the post</h2>
                    <div className="alert-buttons">
                        <button className="yes-button" onClick={handleshare}>Yes</button>
                        <button className="no-button" onClick={() => {
                            document.getElementsByClassName('confirm-share-popup')[0].style.visibility = "hidden";
                            document.getElementsByClassName('confirm-share-popup')[0].style.opacity = "0";
                        }}>No</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Dashboard;