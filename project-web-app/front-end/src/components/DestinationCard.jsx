import React from 'react';

const DestinationCard = ({ imageSrc, title, description }) => {
    return (
      <div className="col">
        <div className="card shadow-sm">
            <img className="card-img-top" src={imageSrc} alt="" />
            <div className="card-img-overlay">
                <h4 className="card-title">{title}</h4>
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <div className="d-flex flex-row-reverse">
                    <a href="/destination">
                        <button type="button" className="btn btn-sm btn-secondary">
                            See more
                        </button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default DestinationCard;