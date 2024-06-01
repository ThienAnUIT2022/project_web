import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import MyButton from '../components/LikeButton';
import CommentsSection from '../components/CommentsSection';
import SearchSuggestions from '../components/SearchSuggestions';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const renderContent = (content) => {
    return content.map((item, index) => {
        switch (item.type) {
            case 'paragraph':
                return (
                    <p key={index}>
                        {item.children.map((child, idx) => {
                            if (child.type === 'text') {
                                return (
                                    <span key={idx} style={{ fontWeight: child.bold ? 'bold' : 'normal' }}>
                                        {child.text}
                                    </span>
                                );
                            }
                            return null;
                        })}
                    </p>
                );
            default:
                return null;
        }
    });
};

const BlogContent = ({ blogs }) => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [popular, setPopular] = useState(0);
    const [auth, setAuth] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [userData, setUserData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birthDay: "",
        gender: "",
        address: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        axios.get("https://vn-backpacking.onrender.com/verifyUser", { withCredentials: true })
        .then(res => {
            if (res.data.Status === "Success") {
            setAuth(true);
            // Fetch the ID and email
            axios.get("https://vn-backpacking.onrender.com/userdata", { withCredentials: true })
                .then(res => {
                if (res.data && res.data && res.data.email && res.data.id) {
                    setUserData(res.data);
                }
                })
                .catch(err => console.log(err));
            } else {
            setAuth(false);
            }
        })
        .catch(err => {
            console.log(err);
            setAuth(false);
        });
    }, []);
    
    const addToFavorites = async (userId, postId) => {
        try {
            const response = await fetch('/api/favorites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, postId }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data.message);
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error('Error adding favorite:', error);
        }
    };

    useEffect(() => {
        const blogData = blogs.data.find(blog => blog.id == id);
        if (blogData) {
            setBlog(blogData);
            setPopular(blogData.attributes.popular);
        }
    }, [id, blogs.data]);

    const handleLike = async () => {
        try {
            const newPopular = popular + 1;
            await axios.put(`https://graceful-authority-3dcf287362.strapiapp.com/api/blogs/${id}`, {
                data: { popular: newPopular }
            });
            setPopular(newPopular);
            addToFavorites(userData.id, id);
        } catch (error) {
            console.error('Error updating popular count', error);
        }
    };

    return (
        <div className="Destination">
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col-md-8">
                        <article className="blog-post">
                            <h2 className="display-5 fw-bold text-body-emphasis">{blog.attributes?.title}</h2>
                            <div className='mt-3 row flex-row justify-content-between'>
                                <span className='fs-6'>{blog.attributes ? format(new Date(blog.attributes.createdAt), 'dd-MM-yyyy hh:mm:ss a') : ''}</span>
                                <MyButton popular={popular} onLike={handleLike} />
                            </div>
                            <p>{blog.attributes?.description}</p>
                            <hr />

                            <div className='py-3'>
                                {blog.attributes?.thumbnail && (
                                    <img style={{ width: "100%" }} src={`${blog.attributes.thumbnail.data.attributes.url}`} alt="thumbnail" />
                                )}
                            </div>

                            <blockquote className="blockquote">
                                {renderContent(blog.attributes?.content || [])}
                            </blockquote>
                            <br />
                        </article>
                    </div>

                    <div className="col-md-4">
                        <div className="sticky-wrapper" style={{ top: "5rem" }}>
                            <div className='card px-2 py-2 mb-3'>
                                <h4 className='card-header'>Search</h4>
                                <div className='card-body'>
                                    <SearchSuggestions blogs={Array.isArray(blogs.data) ? blogs.data : []} />
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className="comments-section">
                        <CommentsSection />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogContent;
