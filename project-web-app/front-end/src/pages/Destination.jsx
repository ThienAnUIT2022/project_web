import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchSuggestions from '../components/SearchSuggestions';
import '../assets/css/destination.css';
import CommentsSection from '../components/CommentsSection';
import DestinationCard from '../components/DestinationCard';
// import LikeButton from '../components/LikeButton'
// import axios from 'axios';

const Destination = ({ blogs = { data: [] } }) => {
  const DesList = blogs && Array.isArray(blogs.data)
    ? blogs.data.map(item => ({
        imageSrc: `http://localhost:1337${item.attributes.thumbnail.data.attributes.url}`,
        title: item.attributes.title,
        description: item.attributes.description,
        id: item.id,
      }))
    : [];

    console.log(DesList);

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(DesList.length / itemsPerPage);
  const paginatedList = DesList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // const [blogs, setBlogs] = useState([]);
  
  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:1337/api/blogs');
  //       setBlogs(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching blogs:', error);
  //     }
  //   };
    
  //   fetchBlogs();
  // }, []);
  
  return (
    <div className="Destination">
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
            {paginatedList.map((item, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <DestinationCard
                    imageSrc={item.imageSrc}
                    title={item.title}
                    description={item.description}
                    id={item.id}
                  />
                </div>
              ))}
            </div>
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`btn ${
                    currentPage === index + 1 ? 'btn-primary' : 'btn-secondary'
                  } mx-1`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
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

export default Destination;
