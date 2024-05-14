import React, { useState } from 'react';
import '../assets/css/destination.css';

const filterComment = (comment) => {
  const inappropriateWords = ['fuck', 'badword2']; // Add more words as needed
  let filteredComment = comment;
  inappropriateWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    filteredComment = filteredComment.replace(regex, '****');
  });
  return filteredComment;
};

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentContent.trim()) {
      const newComment = {
        content: filterComment(commentContent.trim()),
        likes: 0,
        replies: [],
        avatar: 'https://via.placeholder.com/50', // Placeholder avatar URL
      };
      setComments([...comments, newComment]);
      setCommentContent('');
    }
  };

  const handleLike = (index) => {
    const newComments = [...comments];
    newComments[index].likes += 1;
    setComments(newComments);
  };

  const handleReply = (index, replyContent) => {
    const newComments = [...comments];
    if (replyContent.trim()) {
      newComments[index].replies.push({
        content: filterComment(replyContent.trim()),
        avatar: 'https://via.placeholder.com/50', // Placeholder avatar URL
      });
      setComments(newComments);
    }
  };

  const handleDeleteComment = (index) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  const handleDeleteReply = (commentIndex, replyIndex) => {
    const newComments = [...comments];
    newComments[commentIndex].replies = newComments[commentIndex].replies.filter((_, i) => i !== replyIndex);
    setComments(newComments);
  };

  return (
    <div className="comments-section">
      <div className="comments-list mt-3">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="comment mb-2">
              <div className="d-flex align-items-start">
                <img src={comment.avatar} alt="User Avatar" className="avatar me-2" />
                <div>
                  <p>{comment.content}</p>
                  <div className="comment-buttons">
                    <button onClick={() => handleLike(index)} className="comment-button">
                      <i className="fas fa-thumbs-up"></i> Like ({comment.likes})
                    </button>
                    <button
                      onClick={() => {
                        const replyContent = prompt('Enter your reply:');
                        handleReply(index, replyContent);
                      }}
                      className="comment-button"
                    >
                      <i className="fas fa-reply"></i> Reply
                    </button>
                    <button onClick={() => handleDeleteComment(index)} className="comment-button text-danger">
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </div>
                  {comment.replies.length > 0 && (
                    <div className="replies mt-2">
                      {comment.replies.map((reply, replyIndex) => (
                        <div key={replyIndex} className="d-flex align-items-start mb-2">
                          <img src={reply.avatar} alt="User Avatar" className="avatar me-2" />
                          <div>
                            <p>{reply.content}</p>
                            <button onClick={() => handleDeleteReply(index, replyIndex)} className="comment-button text-danger">
                              <i className="fas fa-trash"></i> Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
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
