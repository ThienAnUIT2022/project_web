import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import images from '../assets/images';


function northcentral() {
  return (
    <div>
      <Header></Header>
          <main class="container">      
      <div class="row">
        <div class="col-md-8">
          <article class="blog-post">  
            <h2 class="display-5 fw-bold text-body-emphasis">North Central Coast Vietnam Geography</h2>
            <p class="text-end published-end">Published on <time datetime="2024-03-28">March 28, 2024</time></p>

            <p>The North Central Coast spans across the provinces of 
                <a class="navbar-brand" href="?">Thanh Hoa</a>, 
                <a class="navbar-brand" href="?">Nghe An</a>, 
                <a class="navbar-brand" href="?">Ha Tinh</a>, 
                <a class="navbar-brand" href="?">Quang Binh</a>, 
                <a class="navbar-brand" href="?">Quang Tri</a>, and 
                <a class="navbar-brand" href="?">Thua Thien Hue</a>. It borders the northern region of Vietnam to the north, the South Central Coast to the south, the 
                <a class="navbar-brand" href="?">Annamite Range</a> and Laos to the west, and the East Sea to the east.</p>
            <p>The geography of Vietnam’s North Central Coast is characterized by its narrow coastal plains, rugged mountains, and numerous rivers. The Annamite Range runs through the western part of the region, creating a natural barrier between the coast and the Central Highlands. The North Central Coast has a tropical climate, with hot and humid summers and cool and dry winters. It also experiences monsoons, with heavy rainfall from September to December.</p>
            <img src={images['Huế 1.jpg']} alt="" vspace="30" class="image"/>
            <p>This land also offers some of the most famous attractions in Vietnam, such as the picturesque 
                <a class="navbar-brand" href="?">Sam Son Beach</a> with its long stretch of white sand and clear blue water, the scenic Perfume River that flows through Hue, the 
                <a class="navbar-brand" href="?">Imperial City of Hue</a> - a UNESCO World Heritage Site and former imperial capital of Vietnam, the pristine 
                <a class="navbar-brand" href="?">Lang Co Beach</a> with stunning mountain views, the breathtaking 
                <a class="navbar-brand" href="?">Phong Nha - Ke Bang National Park</a> - a UNESCO World Heritage Site and home to some of the world's largest and most stunning caves, etc.</p>
      
            
          </article>
        </div>
        <div class="col-md-4">
          <h4>Choose where you want to go</h4>
          <ul>
            <li><a class="navbar-brand" href="./Northeast">Northeast Vietnam Geography</a></li>
            <li><a class="navbar-brand" href="./Northwest">Northwest Vietnam</a></li>
            <li><a class="navbar-brand" href="./Red River">Red River Delta</a></li>
            <li><a class="navbar-brand" href="./North Central">North Central Coast Vietnam Geography</a></li>            
            <li><a class="navbar-brand" href="./South Central">South Central Coast Vietnam</a></li>
            <li><a class="navbar-brand" href="./Central Highlands">Central Highlands Geography of Vietnam</a></li>
            <li><a class="navbar-brand" href="./Southeast">Southeast Vietnam</a></li>
            <li><a class="navbar-brand" href="./Mekong Delta">Mekong Delta Geography of Vietnam</a></li>
          </ul>
        </div>
        <div class="comments-section">
            <h3>Comments</h3>
            <div class="mb-3">
              <textarea class="form-control" id="commentContent" rows="3" column="5" placeholder="Write a comment..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </main>
      <Footer></Footer>

    </div>
  )
}

export default northcentral
