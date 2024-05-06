import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import images from '../assets/images';


function northeast() {
  return (
    <div>
      <Header></Header>
          <main class="container">      
      <div class="row">
        <div class="col-md-8">
          <article class="blog-post">  
            <h2 class="display-5 fw-bold text-body-emphasis">Northeast Vietnam Geography</h2>
            <p class="text-end published-end">Published on <time datetime="2024-03-28">March 28, 2024</time></p>

            <p>The Northeast region of Vietnam includes 
                <a class="navbar-brand" href="?">Phu Tho</a>, 
                <a class="navbar-brand" href="?">Tuyen Quang</a>, 
                <a class="navbar-brand" href="?">Thai Nguyen</a>, 
                <a class="navbar-brand" href="?">Cao Bang</a>, 
                <a class="navbar-brand" href="?">Ha Giang</a>, 
                <a class="navbar-brand" href="?">Bac Kan</a>, 
                <a class="navbar-brand" href="?">Lang Son</a>, and 
                <a class="navbar-brand" href="?">Bac Giang</a> provinces. It shares borders with China to the north and east, and the Northwest and Red River Delta to the west and south. The region is characterized by mountainous terrain and a tropical monsoon climate. Summers are hot and humid, while winters are cool and dry.</p>
            <p>The geography of Vietnam’s Northeast is also dominated by the Red River, which runs through the region from the northwest to the east, creating a fertile valley that is ideal for agriculture. This valley is home to many ethnic minority groups, each with their own distinct culture and traditions.</p>
            <img src={images['Thác Bản Giốc 1.jpg']} alt="" vspace="30" class="image"/>
            <p>Northeast Vietnam also boasts many popular tourist attractions, including the breathtaking 
                <a class="navbar-brand" href="?">Ban Gioc Waterfall</a>, the forest and cliff-surrounded 
                <a class="navbar-brand" href="?">Ba Be Lake</a>, the panoramic views from 
                <a class="navbar-brand" href="?">Ma Pi Leng Pass</a>, the 
                <a class="navbar-brand" href="?">Pac Bo relic site</a> where Ho Chi Minh returned to Vietnam, the unique geological formations of 
                <a class="navbar-brand" href="?">Dong Van Karst Plateau Geopark</a>, etc.</p>
            
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

export default northeast
