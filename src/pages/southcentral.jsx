import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import images from '../assets/images';


function southcentral() {
  return (
    <div>
      <Header></Header>
      <main class="container">      
      <div class="row">
        <div class="col-md-8">
          <article class="blog-post">  
            <h2 class="display-5 fw-bold text-body-emphasis">South Central Coast Vietnam</h2>
            <p class="text-end published-end">Published on <time datetime="2024-03-28">March 28, 2024</time></p>

            <p>The South Central Coast region is composed of eight provinces, including 
                <a class="navbar-brand" href="?">Da Nang</a>, 
                <a class="navbar-brand" href="?">Quang Nam</a>, 
                <a class="navbar-brand" href="?">Quang Ngai</a>, 
                <a class="navbar-brand" href="?">Binh Dinh</a>, 
                <a class="navbar-brand" href="?">Phu Yen</a>, 
                <a class="navbar-brand" href="?">Khanh Hoa</a>, 
                <a class="navbar-brand" href="?">Ninh Thuan</a>, and 
                <a class="navbar-brand" href="?">Binh Thuan</a>. The region spans from the southern end of 
                <a class="navbar-brand" href="?">Hai Van Pass</a> in Thua Thien Hue province to the southern boundary of Binh Thuan province. It is bordered by the North Central Coast to the north and the Southeast to the south. </p>
            <p>The geography of Vietnam in this region boasts a diverse landscape of sandy beaches and mountain ranges. The climate here is typically hot and humid, with temperatures ranging from 22 to 32 degrees Celsius. The rainy season lasts from September to December, while the dry season lasts from January to August.</p>
            <img src={images['Hội An 1.jpg']} alt="" vspace="30" class="image"/>
            <p>Like other regions in Vietnam, the South Central Coast also has numerous notable attractions that draw tourists from all over the world, such as 
                <a class="navbar-brand" href="?">My Khe Beach</a> - one of the most attractive beaches on the planet voted by Forbes, 
                <a class="navbar-brand" href="?">Hoi An Ancient Town</a> - a charming UNESCO World Heritage Site with lantern-lit streets, 
                <a class="navbar-brand" href="?">My Son Sanctuary</a> - another UNESCO World Heritage Site and ancient Hindu temple complex that dates back to the Champa Kingdom, 
                <a class="navbar-brand" href="?">Hon Mun Island</a> - a marine reserve in Nha Trang known for its clear waters and abundant marine life, 
                <a class="navbar-brand" href="?">Ponagar Cham Towers</a> - a group of Cham temples that dates back to the 8th to 13th centuries, etc. </p>
      
            
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

export default southcentral
