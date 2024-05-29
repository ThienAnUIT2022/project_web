import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/card.css';

const DestinationCard = ({ imageSrc, title, description, id }) => {
    return (
      <div className="DesCard col">
        <div className="card shadow-sm" id={id}>
            <img className="card-img-top" src={imageSrc} alt="" />
            <div className="card-img-overlay">
                <h4 className="card-title">{title}</h4>
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <div className="d-flex flex-row-reverse">
                    <Link to={`/destination/${id}`}>
                        <button type="button" className="btn btn-sm btn-secondary">
                            See more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default DestinationCard;