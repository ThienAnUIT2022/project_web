import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import images from '../assets/images';


function destination() {
  return (
    <div className="Destination">
      <Header></Header>
      <main className="container">      
        <div className="row">
          <div className="col-md-8">
            <article className="blog-post">  
              <h2 className="display-5 fw-bold text-body-emphasis">Vietnam</h2>
              <p className="text-end published-end">Published on <time datetime="2024-03-28">March 28, 2024</time></p>
              <p>Vietnam, a land of breathtaking beauty and rich cultural heritage, beckons travelers with its diverse landscapes and vibrant cities. From the bustling streets of Hanoi to the serene rice paddies of the countryside, Vietnam offers an unforgettable journey for adventurers and culture enthusiasts alike. Explore the stunning natural wonders of Ha Long Bay, immerse yourself in the ancient charm of Hoi An, or trek through the majestic mountains of Sa Pa. Indulge in the flavors of Vietnamese cuisine, from fragrant pho to crispy banh mi, and discover the warmth and hospitality of the Vietnamese people. With its fascinating history, delicious food, and stunning scenery, Vietnam captivates the hearts of visitors from around the world. Let's explore this beautiful country together with us.</p>
              <hr/>

              <h2 className="fw-bold text-body-emphasis">Regions of Vietnam</h2>
              <p>Vietnam is divided into 3 regions and 8 areas:</p>

              <blockquote className="blockquote">
                <h3 className="fw-bold text-body-emphasis">Northern Vietnam - A haven for adventure seekers</h3>
              </blockquote>
              <p>Northern Vietnam includes the mountainous terrain of Northeast and Northwest Vietnam, as well as the fertile Red River Delta that stretches along the northern coast.</p>
              <li><a className="navbar-brand" href="./Northeast">Northeast Vietnam Geography</a></li>
              <li><a className="navbar-brand" href="./Northwest">Northwest Vietnam</a></li>
              <li><a className="navbar-brand" href="./Red River">Red River Delta</a></li>
              <img src={images['Northern Vietnam.png']} alt="" vspace="30" className="image"/>
              
              <blockquote className="blockquote">
                <h3 className="fw-bold text-body-emphasis">Central Vietnam - Blessed with picture-perfect forests and beaches</h3>
              </blockquote>
              <p>The geography of Vietnam in Central Vietnam is divided into the North Central Coast, South Central Coast, and Central Highlands, each with its own unique natural features.</p>
              <li><a className="navbar-brand" href="./North Central">North Central Coast Vietnam Geography</a></li>            
              <li><a className="navbar-brand" href="./South Central">South Central Coast Vietnam</a></li>
              <li><a className="navbar-brand" href="./Central Highlands">Central Highlands Geography of Vietnam</a></li>
              <img src={images['Central Vietnam.png']} alt="" vspace="30" className="image"/>
              
              <blockquote className="blockquote">
                <h3 className="fw-bold text-body-emphasis">Southern Vietnam - An ideal destination for culture lovers and history buffs</h3>
              </blockquote>
              <p>South Vietnam, including Southeast Vietnam and Mekong Delta, is characterized by flat terrain with a dense network of rivers and canals.</p>
              <li><a className="navbar-brand" href="./Southeast">Southeast Vietnam</a></li>
              <li><a className="navbar-brand" href="./Mekong Delta">Mekong Delta Geography of Vietnam</a></li>
              <img src={images['Southern Vietnam.png']} alt="" vspace="30" className="image"/>

            </article>
          </div>
        
          <div className="col-md-4">
            <div className="sticky-wrapper">
              <h4>Search</h4>
              <div className="">
                <div>
                  <input placeholder="mountain, sea, etc"/>
                  <a href="#!" data-action="showTagGroup">See all</a>
                </div>
                <br/>
                <div className="" >
                  <h6>Geography</h6> 
                  <label><input type="checkbox" name="" value="mountains"/> Mountains </label>   
                  <label><input type="checkbox" name="" value="beaches"/> Beaches </label>      
                  <label><input type="checkbox" name="" value="rivers"/> Rivers </label>        
                  <label><input type="checkbox" name="" value="lakes"/> Lakes </label>        
                  <label><input type="checkbox" name="" value="forests"/> Forests </label>        
                </div>
                <br/>
                <div className="" >
                  <h6>Activities</h6> 
                  <label><input type="checkbox" name="" value="hiking"/> Hiking </label>   
                  <label><input type="checkbox" name="" value="surfing"/> Surfing </label>      
                  <label><input type="checkbox" name="" value="diving"/> Diving </label>        
                  <label><input type="checkbox" name="" value="shopping"/> Shopping </label>        
                  <label><input type="checkbox" name="" value="spas"/> Spas </label>        
                </div>
                <br/>
                <div className="" >
                  <h6>Transportation</h6> 
                  <label><input type="checkbox" name="" value="bus"/> Bus </label>   
                  <label><input type="checkbox" name="" value="airports"/> Airports </label>      
                </div>
                <br/>
                <div className="" >
                  <h6>Cost</h6> 
                  <label><input type="checkbox" name="" value="free"/> Free </label>   
                  <label><input type="checkbox" name="" value="paid"/> Paid </label>      
                </div>
              </div>

              <h4>Choose where you want to go</h4>
                <ul>
                  <li><a className="navbar-brand" href="./Northeast">Northeast Vietnam Geography</a></li>
                  <li><a className="navbar-brand" href="./Northwest">Northwest Vietnam</a></li>
                  <li><a className="navbar-brand" href="./Red River">Red River Delta</a></li>
                  <li><a className="navbar-brand" href="./North Central">North Central Coast Vietnam Geography</a></li>            
                  <li><a className="navbar-brand" href="./South Central">South Central Coast Vietnam</a></li>
                  <li><a className="navbar-brand" href="./Central Highlands">Central Highlands Geography of Vietnam</a></li>
                  <li><a className="navbar-brand" href="./Southeast">Southeast Vietnam</a></li>
                  <li><a className="navbar-brand" href="./Mekong Delta">Mekong Delta Geography of Vietnam</a></li>
                </ul>
            </div>       
          </div>

          <div className="comments-section">
            <h3>Comments</h3>
            <div className="mb-3">
              <textarea className="form-control" id="commentContent" rows="3"  placeholder="Write a comment..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default destination
