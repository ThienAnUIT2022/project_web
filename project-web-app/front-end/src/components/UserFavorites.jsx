import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserFavorites = ({ userId }) => {
    const [favorites, setFavorites] = useState([]);
    const [favoriteBlogs, setFavoriteBlogs] = useState([]);
    const [error, setError] = useState(null);

    const removeFromFavorites = async (userId, postId) => {
        try {
            const response = await fetch('/api/favorites', {
                method: 'DELETE',
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
            console.error('Error removing favorite:', error);
        }
    };
    
    useEffect(() => {
        if (userId) {
            axios.get(`/api/favorites/${userId}`)
                .then(response => {
                    setFavorites(response.data);
                    return response.data;
                })
                .then(favorites => {
                    const favoritePromises = favorites.map(favorite =>
                        axios.get(`http://localhost:1337/api/blogs/${favorite.post_id}`)
                    );
                    return Promise.all(favoritePromises);
                })
                .then(responses => {
                    const favoriteBlogs = responses.map(res => res.data.data);
                    setFavoriteBlogs(favoriteBlogs);
                })
                .catch(error => {
                    console.error('Error fetching favorite blogs:', error);
                });
        }
    }, [userId]);

    return (
        <div className="scrollar-bg">
            <div className="row row-cols-1 row-cols-md-1 g-4">
                <div className="d-flex flex-column align-items-stretch flex-shrink-0 rownd">
                    <span className="fs-5 fw-semibold">Favorite place</span>
                    <div className="scrollar-div">
                        <div className="scrollar-object">
                            <div className="list-group list-group-flush border-bottom scrollarea">
                                {favoriteBlogs.length === 0 ? (
                                    <p>You have no favorite posts yet.</p>
                                ) : (
                                    <ul>
                                        {favoriteBlogs.map(post => (
                                        <li key={post.id}>
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <strong className="mb-1">{post.attributes.title}</strong>
                                            </div>
                                            <p className="mb-1">{post.attributes.cost}</p>
                                        </li>))}
                                    </ul>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFavorites;
