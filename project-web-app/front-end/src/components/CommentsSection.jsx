import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import '../assets/css/destination.css';

const filterComment = (comment) => {
  const inappropriateWords = ['fuck', 'badword2']; // Add more words as needed
  let filteredComment = comment;
  inappropriateWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    filteredComment = filteredComment.replace(regex, '****');
  });
  return filteredComment;
};

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get('http://localhost:1337/api/comments?populate=*');
      setComments(response.data.data);
    };
    fetchComments();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (commentContent.trim()) {
      const newComment = {
        data: {
          content: filterComment(commentContent.trim()),
          likes: 0,
          replies: [],
          avatar: 'https://via.placeholder.com/50', // Placeholder avatar URL
        },
      };

      const response = await axios.post('http://localhost:1337/api/comments', newComment);
      setComments([...comments, response.data.data]);
      setCommentContent('');
    }
  };

  const handleLike = async (index) => {
    const newComments = [...comments];
    newComments[index].attributes.likes += 1;
    setComments(newComments);

    const updatedComment = {
      data: {
        likes: newComments[index].attributes.likes,
      },
    };

    await axios.put(`http://localhost:1337/api/comments/${newComments[index].id}`, updatedComment);
  };

  const handleReply = async (index, replyContent) => {
    const newComments = [...comments];
    if (replyContent.trim()) {
      newComments[index].attributes.replies.push({
        content: filterComment(replyContent.trim()),
        avatar: 'https://via.placeholder.com/50', // Placeholder avatar URL
      });
      setComments(newComments);

      const updatedComment = {
        data: {
          replies: newComments[index].attributes.replies,
        },
      };

      await axios.put(`http://localhost:1337/api/comments/${newComments[index].id}`, updatedComment);
    }
  };

  const handleDeleteComment = async (id) => {
    const newComments = comments.filter((comment) => comment.id !== id);
    setComments(newComments);

    await axios.delete(`http://localhost:1337/api/comments/${id}`);
  };

  const handleDeleteReply = async (commentIndex, replyIndex) => {
    const newComments = [...comments];
    newComments[commentIndex].attributes.replies = newComments[commentIndex].attributes.replies.filter((_, i) => i !== replyIndex);
    setComments(newComments);

    const updatedComment = {
      data: {
        replies: newComments[commentIndex].attributes.replies,
      },
    };

    await axios.put(`http://localhost:1337/api/comments/${newComments[commentIndex].id}`, updatedComment);
  };

  return (
    <div className="comments-section">
      <div className="comments-list mt-3">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="comment mb-2">
              <div className="d-flex align-items-start">
                <div className="comment-avatar">
                  <img src={comment.attributes.avatar} alt="Avatar" className='avatar me-2'/>
                </div>
                <div className="comment-content">
                  <p>{comment.attributes.content}</p>
                  <div className="comment-metadata">
                    <span>{format(new Date(comment.attributes.createdAt), 'dd-MM-yyyy hh:mm:ss a')}</span>
                    <div className="comment-buttons">
                      <button 
                        onClick={() => handleLike(index)} 
                        className="comment-button"> 
                          <i class="bi bi-hand-thumbs-up"></i> {comment.attributes.likes}
                      </button>
                      <button
                        onClick={() => {
                          const replyContent = prompt('Enter your reply:');
                          handleReply(index, replyContent);
                        }}
                        className="comment-button"
                      >
                        Reply <i class="bi bi-reply"></i>
                      </button>
                      <button 
                        onClick={() => handleDeleteComment(comment.id)} 
                        className="comment-button text-danger">
                        Delete 
                      </button>
                    </div>
                  </div>
                  <div className="replies-section">
                    {comment.attributes.replies.length > 0 && (
                      <div className='replies mt-2'>
                        {comment.attributes.replies.map((reply, replyIndex) => (
                        <div key={replyIndex} className="d-flex align-items-start mb-2">
                          <img 
                            src={reply.avatar} 
                            alt="User Avatar" 
                            className="avatar me-2" 
                          />
                            <div>
                              <p>{reply.content}</p>
                              <button 
                              onClick={() => handleDeleteReply(index, replyIndex)} 
                              className="comment-button text-danger">
                                Delete <i class="bi bi-trash"></i>
                              </button>
                            </div>
                        </div>
                      ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-comments">No comments yet! Be the first comment here!</p>
        )}
      </div>
        <h3>Comments</h3>
        <form className="add-comment-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="commentContent"
              rows="3"
              placeholder="Write a comment..."
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  );
};

export default CommentsSection;