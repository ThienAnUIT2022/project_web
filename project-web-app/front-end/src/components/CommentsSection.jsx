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
  const [replyContent, setReplyContent] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

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

  const handleReply = async (index) => {
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
      setReplyContent('');
      setReplyingTo(null);
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
    <section className="pt-5 my-5">
      <div className="card bg-light">
        <div className="card-body">
          <form className="mb-4" onSubmit={handleSubmit}>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Join the discussion and leave a comment!"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
          </form>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <img className="rounded-circle" src={comment.attributes.avatar} alt="..." />
                </div>
                <div className="ms-3">
                  <div className="fw-bold">Commenter Name</div>
                  {comment.attributes.content}
                  <div className="comment-metadata">
                    <span>{format(new Date(comment.attributes.createdAt), 'dd-MM-yyyy hh:mm:ss a')}</span>
                    <div className="comment-buttons">
                      <button onClick={() => handleLike(index)} className="comment-button">
                        <i className="bi bi-hand-thumbs-up"></i> {comment.attributes.likes}
                      </button>
                      <button
                        onClick={() => setReplyingTo(index)}
                        className="comment-button"
                      >
                        Reply <i className="bi bi-reply"></i>
                      </button>
                      <button onClick={() => handleDeleteComment(comment.id)} className="comment-button text-danger">
                        Delete <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                  {replyingTo === index && (
                    <form className="mt-3 w-100" onSubmit={(e) => {
                      e.preventDefault();
                      handleReply(index);
                    }}>
                      <textarea
                        className="form-control"
                        cols="12"
                        rows="2"
                        placeholder="Write a reply..."
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                      ></textarea>
                      <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </form>
                  )}
                  {comment.attributes.replies.length > 0 && (
                    comment.attributes.replies.map((reply, replyIndex) => (
                      <div key={replyIndex} className="d-flex mt-4">
                        <div className="flex-shrink-0">
                          <img className="rounded-circle" src={reply.avatar} alt="..." />
                        </div>
                        <div className="ms-3">
                          <div className="fw-bold">Commenter Name</div>
                          {reply.content}
                          <button onClick={() => handleDeleteReply(index, replyIndex)} className="comment-button text-danger">
                            Delete <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="no-comments">No comments yet! Be the first comment here!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
