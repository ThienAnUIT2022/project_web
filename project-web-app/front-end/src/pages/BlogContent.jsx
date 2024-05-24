import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import MyButton from '../components/LikeButton';
import CommentsSection from '../components/CommentsSection';
import SearchSuggestions from '../components/SearchSuggestions';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

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

const BlogContent = ({blogs}) => {
    const {id} = useParams();
    let blog = {};
    if (blog) {
        let arr = blogs.data.filter(blog => blog.id == id);
        blog = arr[0];
    } else { 
        blog = {};
    }
    console.log(blog);
    return (
        <div className="Destination">
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-md-8">
          <article className="blog-post">
              <h2 className="display-5 fw-bold text-body-emphasis">{blog.attributes.title}</h2>
              <div className='mt-3 row flex-row justify-content-between'>
                <span className='fs-6'>{format(new Date(blog.attributes.createdAt), 'dd-MM-yyyy hh:mm:ss a')}</span>
                <MyButton></MyButton>
              </div>
              <p>{blog.attributes.description}</p>
              <hr />

              <div className='py-3'>
                <img style={{width:"100%"}} src={`http://localhost:1337${blog.attributes.thumbnail.data.attributes.url}`} alt="thumbnail" />
              </div>

              <blockquote className="blockquote">
              {renderContent(blog.attributes?.content || [])}
              </blockquote>
              <br/>

            </article>
          </div>

          <div className="col-md-4">
            <div className="sticky-wrapper" style={{top: "5rem"}}>
              <div className='card px-2 py-2 mb-3'>
                <h4 className='card-header'>Search</h4>
                <div className='card-body'>
                  <SearchSuggestions blogs={Array.isArray(blogs.data) ? blogs.data : []} />
                </div>
              </div>

              <br/>
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