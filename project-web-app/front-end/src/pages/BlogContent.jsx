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

              <div className='card px-2 py-2 mb-3'>
                <div className='row d-flex justify-content-between'>
                  <div className="dropdown col-12 col-lg-auto">
                    <a href="?" className="d-flex justify-content-between align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <h6 className='text-start'>Geography</h6>
                      <svg className="bi me-2 text-end" width="40" height="32"></svg>
                    </a>
                    <ul className="dropdown-menu text-small">
                      <label className="dropdown-item"><input type="checkbox" value="mountains" /> Mountains </label>
                      <label className="dropdown-item"><input type="checkbox" value="beaches" /> Beaches </label>
                      <label className="dropdown-item"><input type="checkbox" value="rivers" /> Rivers </label>
                      <label className="dropdown-item"><input type="checkbox" value="lakes" /> Lakes </label>
                      <label className="dropdown-item"><input type="checkbox" value="forests" /> Forests </label>
                    </ul>
                  </div>
                  <div className="dropdown col-12 col-lg-auto">
                    <a href="?" className="d-flex justify-content-between align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <h6 className='text-start'>Activities</h6>
                      <svg className="bi me-2 text-end" width="40" height="32"></svg>
                    </a>
                    <ul className="dropdown-menu text-small">
                      <label className="dropdown-item"><input type="checkbox" value="hiking" /> Hiking </label>
                      <label className="dropdown-item"><input type="checkbox" value="surfing" /> Surfing </label>
                      <label className="dropdown-item"><input type="checkbox" value="diving" /> Diving </label>
                      <label className="dropdown-item"><input type="checkbox" value="shopping" /> Shopping </label>
                      <label className="dropdown-item"><input type="checkbox" value="spas" /> Spas </label>
                    </ul>
                  </div>
                  <div className="dropdown col-12 col-lg-auto">
                    <a href="?" className="d-flex justify-content-between align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <h6 className='text-start'>Transposition</h6>
                      <svg className="bi me-2 text-end" width="40" height="32"></svg>
                    </a>
                    <ul className="dropdown-menu text-small">
                      <label className="dropdown-item"><input type="checkbox" value="bus" /> Bus </label>
                      <label className="dropdown-item"><input type="checkbox" value="airports" /> Airports </label>
                    </ul>
                  </div>
                  <div className="dropdown col-12 col-lg-auto">
                    <a href="?" className="d-flex justify-content-between align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <h6 className='text-start'>Cost</h6>
                      <svg className="bi me-2 text-end" width="40" height="32"></svg>
                    </a>
                    <ul className="dropdown-menu text-small">
                      <label className="dropdown-item"><input type="checkbox" value="free" /> Free </label>
                      <label className="dropdown-item"><input type="checkbox" value="paid" /> Paid </label>
                    </ul>
                  </div>
                </div>
                <button type="submit" className='btn btn-primary my-2 ms-1 me-2'>Filter</button>
              </div>

              <div className='card px-2 py-2 mb-3'>
                <h4 className='card-header'>Choose where you want to go</h4>
                <div className='card-text'>
                  <ul className='card-text mb-0'>
                    <li><a className="text-decoration-none text-dark" href="./Northeast">Northeast Vietnam Geography</a></li>
                    <li><a className="text-decoration-none text-dark" href="./Northwest">Northwest Vietnam</a></li>
                    <li><a className="text-decoration-none text-dark" href="./Red River">Red River Delta</a></li>
                    <li><a className="text-decoration-none text-dark" href="./North Central">North Central Coast Vietnam Geography</a></li>
                    <li><a className="text-decoration-none text-dark" href="./South Central">South Central Coast Vietnam</a></li>
                    <li><a className="text-decoration-none text-dark" href="./Central Highlands">Central Highlands Geography of Vietnam</a></li>
                    <li><a className="text-decoration-none text-dark" href="./Southeast">Southeast Vietnam</a></li>
                    <li><a className="text-decoration-none text-dark" href="./Mekong Delta">Mekong Delta Geography of Vietnam</a></li>
                  </ul>
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