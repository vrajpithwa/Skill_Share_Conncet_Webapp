import React from 'react';
import './Posts.css';
const Posts = () => {
  return (
    <div className="post-container">
      <div className="user-info">
        <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'  alt="User Profile" className="profile-pic" />
        <div className="user-details">
          <h4 className="user-name"> Vraj Pithwa</h4>
          <p className="post-time">Software  Engineer at ABC Inc.</p>
        </div>
      </div>
      <div className="post-content">
      <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' className='post-content' />

      </div>
      <div className="post-actions">
        <button className="like-btn">Like</button>
        <button className="comment-btn">Comment</button>
      </div>
      <div className="post-stats">
        <p> Likes</p>
        <p> Comments</p>
      </div>
    </div>
  );
};

export default Posts;
