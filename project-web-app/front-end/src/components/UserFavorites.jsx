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
                        axios.get(`https://graceful-authority-3dcf287362.strapiapp.com/api/blogs/${favorite.post_id}`)
                    );
                    return Promise.all(favoritePromises);
                })
                .then(responses => {
                    const favoriteBlogs = responses.map(res => res.data.data);
                    setFavoriteBlogs(favoriteBlogs);
                    console.log('Favorite blogs:', favoriteBlogs);
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
                    <div className="fs-3 fw-semibold py-2 text-center">
                        Favorite place
                    </div>
                    <div className="scrollar-div">
                        <div className="scrollar-object">
                            <div className="list-group list-group-flush border-bottom scrollarea">
                                {favoriteBlogs.length === 0 ? (
                                    <div>
                                        <div className='list-group-item list-group-item-action py-3 lh-sm'>
                                            <strong> You have no favorite posts yet. </strong>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        {favoriteBlogs.map(post => (
                                        <div key={post.id} className='list-group-item list-group-item-action py-3 lh-sm'>
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <strong className="mb-1">{post.attributes.title}</strong>
                                            </div>
                                            <div className="col-10 mb-1">-- {post.attributes.cost} | {post.attributes.transposition} -- </div>
                                        </div>))}
                                    </div>
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
