import React, {useState} from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"

const libraries = ['places', 'marker'];
const mapContainerStyle = {
  width: '100%',
  height: '560px',
};
const center = {
    lat: 10.88399, lng: 106.78315 
};

const locations = [
  {
    lat: 10.18094,
    lng: 104.0435901,
    name: "Hàm Ninh fishing village",
    description: "Located in Phu Quoc district, Kien Giang province, it possesses wild and peaceful beauty, suitable for watching the sea and enjoying many fresh seafood dishes.",
    image_url: "https://www.dongtravel.com/files/blog/9/lang-chai-Ham-Ninh-Phu-Quoc.jpg"
  },
  {
    lat: 9.242906,
    lng: 105.822051,
    name: "Bạc Liêu wind power field",
    description: "update soon"
  },
  {
    lat: 11.5884729,
    lng: 109.0857476,
    name: "ĐT702",
    description: "update soon"
  },
  {
    lat: 11.9352253,
    lng: 108.3735285,
    name: "Tà Nung Pass",
    description: "update soon"
  },
  {
    lat: 23.240019,
    lng: 105.3897002,
    name: "Mã Pí Lèng Pass",
    description: "update soon"
  },
  {
    lat: 11.8925379,
    lng: 108.4166789,
    name: "Lavender tourist area Đà Lạt",
    description: "update soon"
  }
];


const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "",
        libraries,
      });
    
      const [selectedLocation, setSelectedLocation] = useState(null);
 
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }
    
      return (
        <div>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
          >
            {Object.values(locations).map((location, index) => (
              <Marker
                key={index}
                position={{ lat: location.lat, lng: location.lng }}
                title={location.name}
                onClick={() => setSelectedLocation(location)}
              />
              ))
            }

            {selectedLocation && (
              <InfoWindow
                position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                onCloseClick={() => setSelectedLocation(null)}
              >
                <div style={{width: '260px', height: '170px'}}>
                  <h4>{selectedLocation.name}</h4>
                  <p>{selectedLocation.description}</p>
                  {/* <img src={selectedLocation.image_url}></img> */}
                </div>
              </InfoWindow>
            )}
            <Marker position={{lat: 10.99388, lng: 106.78315 }}></Marker>
          </GoogleMap>
        </div>
      );
}

export default Map;
