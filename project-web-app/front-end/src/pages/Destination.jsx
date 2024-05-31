import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchSuggestions from '../components/SearchSuggestions';
import '../assets/css/destination.css';
import DestinationCard from '../components/DestinationCard';

const Destination = ({ blogs = { data: [] } }) => {
  const DesList = useMemo(() => 
    blogs && Array.isArray(blogs.data)
      ? blogs.data.map(item => ({
          imageSrc: `${item.attributes.thumbnail.data.attributes.url}`,
          title: item.attributes.title,
          description: item.attributes.description,
          id: item.id,
          geography: item.attributes.geography ? item.attributes.geography.split(", ") : [],
          transportation: item.attributes.transportation ? item.attributes.transportation.split(", ") : [],
          cost: item.attributes.cost ? item.attributes.cost.split(", ") : []
        }))
      : []
  , [blogs]);

  const [filteredDesList, setFilteredDesList] = useState(DesList);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const [selectedGeography, setSelectedGeography] = useState([]);
  const [selectedTransportation, setSelectedTransportation] = useState([]);
  const [selectedCost, setSelectedCost] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    filterDestinations(searchTerm, selectedGeography, selectedTransportation, selectedCost);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType, value, isChecked) => {
    let updatedFilters;
    switch (filterType) {
      case 'geography':
        updatedFilters = isChecked
          ? [...selectedGeography, value]
          : selectedGeography.filter(item => item !== value);
        setSelectedGeography(updatedFilters);
        filterDestinations('', updatedFilters, selectedTransportation, selectedCost);
        break;
      case 'transportation':
        updatedFilters = isChecked
          ? [...selectedTransportation, value]
          : selectedTransportation.filter(item => item !== value);
        setSelectedTransportation(updatedFilters);
        filterDestinations('', selectedGeography, updatedFilters, selectedCost);
        break;
      case 'cost':
        updatedFilters = isChecked
          ? [...selectedCost, value]
          : selectedCost.filter(item => item !== value);
        setSelectedCost(updatedFilters);
        filterDestinations('', selectedGeography, selectedTransportation, updatedFilters);
        break;
      default:
        break;
    }
  };

  const filterDestinations = (searchTerm, geographyFilters, transportationFilters, costFilters) => {
    const filtered = DesList.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (geographyFilters.length === 0 || geographyFilters.some(filter => item.geography.includes(filter))) &&
      (transportationFilters.length === 0 || transportationFilters.some(filter => item.transportation.includes(filter))) &&
      (costFilters.length === 0 || costFilters.some(filter => item.cost.includes(filter)))
    );
    setFilteredDesList(filtered);
  };

  useEffect(() => {
    filterDestinations('', selectedGeography, selectedTransportation, selectedCost);
  }, [DesList, selectedGeography, selectedTransportation, selectedCost]);

  const totalPages = Math.ceil(filteredDesList.length / itemsPerPage);
  const paginatedList = filteredDesList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Header />
      <div className="Destination">
        <main className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="row">
                {paginatedList.map((item, index) => (
                  <div className="col-lg-4 col-md-6 mb-3" key={index}>
                    <DestinationCard
                      imageSrc={item.imageSrc}
                      title={item.title}
                      description={item.description}
                      id={item.id}
                    />
                  </div>
                ))}
              </div>
              <div className="pagination d-flex justify-content-center pb-5">
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

            <div className="col-lg-3 col-12">
              <div className="sticky-wrapper" style={{ top: "5rem" }}>
                <div className='card px-2 py-2 mb-3'>
                  <h4 className='card-header'>Search</h4>
                  <div className='card-body'>
                    <SearchSuggestions blogs={Array.isArray(blogs.data) ? blogs.data : []} onSearch={handleSearch} />
                  </div>
                </div>

                <div className='card px-2 py-2 mb-3'>
                  <div className='row d-flex justify-content-between'>
                    <div className="col-12">
                      <button className="btn btn-link text-decoration-none" type="button" data-bs-toggle="collapse" data-bs-target="#geographyCollapse" aria-expanded="false" aria-controls="geographyCollapse">
                        <h6 className='text-start text-black'>Geography</h6>
                      </button>
                      <div className="collapse" id="geographyCollapse">
                        <ul className="list-group">
                          {['mountain', 'coastal', 'delta', 'forest', 'island'].map((geo, idx) => (
                            <li className="list-group-item" key={idx}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  value={geo}
                                  onChange={(e) => handleFilterChange('geography', geo, e.target.checked)}
                                />
                                <label className="form-check-label">{geo.charAt(0).toUpperCase() + geo.slice(1)}</label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-link text-decoration-none" type="button" data-bs-toggle="collapse" data-bs-target="#transportationCollapse" aria-expanded="false" aria-controls="transportationCollapse">
                        <h6 className='text-start text-black'>Transportation</h6>
                      </button>
                      <div className="collapse" id="transportationCollapse">
                        <ul className="list-group">
                          {['motorbike', 'bus', 'airport', 'ship'].map((trans, idx) => (
                            <li className="list-group-item" key={idx}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  value={trans}
                                  onChange={(e) => handleFilterChange('transportation', trans, e.target.checked)}
                                />
                                <label className="form-check-label">{trans.charAt(0).toUpperCase() + trans.slice(1)}</label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-link text-decoration-none" type="button" data-bs-toggle="collapse" data-bs-target="#costCollapse" aria-expanded="false" aria-controls="costCollapse">
                        <h6 className='text-start text-black'>Cost</h6>
                      </button>
                      <div className="collapse" id="costCollapse">
                        <ul className="list-group">
                          {['free', 'paid'].map((cost, idx) => (
                            <li className="list-group-item" key={idx}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  value={cost}
                                  onChange={(e) => handleFilterChange('cost', cost, e.target.checked)}
                                />
                                <label className="form-check-label">{cost.charAt(0).toUpperCase() + cost.slice(1)}</label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <br />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Destination;
