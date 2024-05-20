import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchSuggestions from '../components/SearchSuggestions';
import '../assets/css/destination.css';
import CommentsSection from '../components/CommentsSection';
import LikeButton from '../components/LikeButton'


function destination() {
  return (
    <div className="Destination">
      <Header></Header>
      <main className="container">
        <div className="row">
          <div className="col-md-8">
            <article className="blog-post">
              <h2 className="display-5 fw-bold text-body-emphasis">Vietnam</h2>
              <div>
                <LikeButton></LikeButton>
              </div>
              <p className="text-end published-end">Published on <time datetime="2024-03-28">March 28, 2024</time></p>
              <p>Vietnam, a land of breathtaking beauty and rich cultural heritage, beckons travelers with its diverse landscapes and vibrant cities. From the bustling streets of Hanoi to the serene rice paddies of the countryside, Vietnam offers an unforgettable journey for adventurers and culture enthusiasts alike. Explore the stunning natural wonders of Ha Long Bay, immerse yourself in the ancient charm of Hoi An, or trek through the majestic mountains of Sa Pa. Indulge in the flavors of Vietnamese cuisine, from fragrant pho to crispy banh mi, and discover the warmth and hospitality of the Vietnamese people. With its fascinating history, delicious food, and stunning scenery, Vietnam captivates the hearts of visitors from around the world. Let's explore this beautiful country together with us.</p>
              <hr />

              <h2 className="fw-bold text-body-emphasis">Regions of Vietnam</h2>
              <p>Vietnam is divided into 3 regions and 8 areas:</p>

              <blockquote className="blockquote">
                <h3 className="fw-bold text-body-emphasis">Northern Vietnam - A haven for adventure seekers</h3>
              </blockquote>
              <p>Northern Vietnam includes the mountainous terrain of Northeast and Northwest Vietnam, as well as the fertile Red River Delta that stretches along the northern coast.</p>
              <li><a className="navbar-brand" href="./Northeast">Northeast Vietnam Geography</a></li>
              <li><a className="navbar-brand" href="./Northwest">Northwest Vietnam</a></li>
              <li><a className="navbar-brand" href="./Red River">Red River Delta</a></li>

              <blockquote className="blockquote">
                <h3 className="fw-bold text-body-emphasis">Central Vietnam - Blessed with picture-perfect forests and beaches</h3>
              </blockquote>
              <p>The geography of Vietnam in Central Vietnam is divided into the North Central Coast, South Central Coast, and Central Highlands, each with its own unique natural features.</p>
              <li><a className="navbar-brand" href="./North Central">North Central Coast Vietnam Geography</a></li>
              <li><a className="navbar-brand" href="./South Central">South Central Coast Vietnam</a></li>
              <li><a className="navbar-brand" href="./Central Highlands">Central Highlands Geography of Vietnam</a></li>

              <blockquote className="blockquote">
                <h3 className="fw-bold text-body-emphasis">Southern Vietnam - An ideal destination for culture lovers and history buffs</h3>
              </blockquote>
              <p>South Vietnam, including Southeast Vietnam and Mekong Delta, is characterized by flat terrain with a dense network of rivers and canals.</p>
              <li><a className="navbar-brand" href="./Southeast">Southeast Vietnam</a></li>
              <li><a className="navbar-brand" href="./Mekong Delta">Mekong Delta Geography of Vietnam</a></li>
              <br/>

            </article>
          </div>

          <div className="col-md-4">
            <div className="sticky-wrapper" style={{top: "5rem"}}>
              <div className='card px-2 py-2 mb-3'>
                <h4 className='card-header'>Search</h4>
                <div className='card-body'>
                  <SearchSuggestions></SearchSuggestions>
                </div>
              </div>

              <div className='card px-2 py-2 mb-3'>
                <div className='row d-flex justify-content-between'>
                  <div className="dropdown col-12 col-lg-auto">
                    <a href="?" class="d-flex justify-content-between align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <h6 className='text-start'>Geography</h6>
                      <svg class="bi me-2 text-end" width="40" height="32"></svg>
                    </a>
                    <ul class="dropdown-menu text-small">
                      <label className="dropdown-item"><input type="checkbox" value="mountains" /> Mountains </label>
                      <label className="dropdown-item"><input type="checkbox" value="beaches" /> Beaches </label>
                      <label className="dropdown-item"><input type="checkbox" value="rivers" /> Rivers </label>
                      <label className="dropdown-item"><input type="checkbox" value="lakes" /> Lakes </label>
                      <label className="dropdown-item"><input type="checkbox" value="forests" /> Forests </label>
                    </ul>
                  </div>
                  <div className="dropdown col-12 col-lg-auto">
                    <a href="?" class="d-flex justify-content-between align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <h6 className='text-start'>Activities</h6>
                      <svg class="bi me-2 text-end" width="40" height="32"></svg>
                    </a>
                    <ul class="dropdown-menu text-small">

                      <label className="dropdown-item"><input type="checkbox" value="hiking" /> Hiking </label>
                      <label className="dropdown-item"><input type="checkbox" value="surfing" /> Surfing </label>
                      <label className="dropdown-item"><input type="checkbox" value="diving" /> Diving </label>
                      <label className="dropdown-item"><input type="checkbox" value="shopping" /> Shopping </label>
                      <label className="dropdown-item"><input type="checkbox" value="spas" /> Spas </label>
                    </ul>
                  </div>
                  <div className="dropdown col-12 col-lg-auto">
                    <a href="?" class="d-flex justify-content-between align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <h6 className='text-start'>Transposition</h6>
                      <svg class="bi me-2 text-end" width="40" height="32"></svg>
                    </a>
                    <ul class="dropdown-menu text-small">

                      <label className="dropdown-item"><input type="checkbox" value="bus" /> Bus </label>
                      <label className="dropdown-item"><input type="checkbox" value="airports" /> Airports </label>
                    </ul>
                  </div>
                  <div className="dropdown col-12 col-lg-auto">
                    <a href="?" class="d-flex justify-content-between align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <h6 className='text-start'>Cost</h6>
                      <svg class="bi me-2 text-end" width="40" height="32"></svg>
                    </a>
                    <ul class="dropdown-menu text-small">

                      <label className="dropdown-item"><input type="checkbox" value="free" /> Free </label>
                      <label className="dropdown-item"><input type="checkbox" value="paid" /> Paid </label>
                    </ul>
                  </div>
                </div>
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
      <Footer></Footer>
    </div>
  )
}

export default destination