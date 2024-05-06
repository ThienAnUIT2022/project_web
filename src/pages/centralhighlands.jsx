import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import images from '../assets/images';


function centralhighlands() {
  return (
    <div>
      <Header></Header>
      <main class="container">      
        <div class="row">
          <div class="col-md-8">
            <article class="blog-post">  
              <h2 class="display-5 fw-bold text-body-emphasis">Central Highlands Geography of Vietnam</h2>
              <p class="text-end published-end">Published on <time datetime="2024-03-28">March 28, 2024</time></p>

              <p>The Central Highlands (Tay Nguyen) region consists of 
                <a class="navbar-brand" href="?">Kon Tum</a>, 
                <a class="navbar-brand" href="?">Gia Lai</a>, 
                <a class="navbar-brand" href="?">Dak Lak</a>, 
                <a class="navbar-brand" href="?">Dak Nong</a>, and 
                <a class="navbar-brand" href="?">Lam Dong</a> provinces. It borders the lower part of Laos and northeastern Cambodia. </p>
              <p>The geography of Vietnam in the Central Highlands is characterized by rolling hills and plateaus. The region lies on a series of contiguous plateaus, with an average elevation of 500-700 meters above sea level. All of these plateaus are surrounded by high mountain ranges and massifs to the east. The climate here is generally cooler and less humid than in the coastal regions, with temperatures ranging from 15 to 28 degrees Celsius.</p>
              <p>Moreover, the region is home to several major rivers, including the 
                <a class="navbar-brand" href="?">Serepok</a>, 
                <a class="navbar-brand" href="?">Ba</a>, and 
                <a class="navbar-brand" href="?">Dong Nai rivers</a>, which serve as important water sources, facilitate agriculture, and boost hydroelectric power production. The Central Highlands is also known for its extensive forests, which cover over half of the region's total area.</p>
              <img src={images['Núi lửa Chư Đăng Ya 1.jpg']} alt="" vspace="30" class="image"/>
              <p>Some of the most famous tourist attractions in the Central Highlands are 
                <a class="navbar-brand" href="?">Langbiang</a> - the highest peak in the region that offers breathtaking views of the surrounding mountains and valleys, 
                <a class="navbar-brand" href="?">the Valley of Love</a> - a picturesque valley in Da Lat famous for its romantic atmosphere and stunning scenery, 
                <a class="navbar-brand" href="?">Mang Den Ecotourism Area</a> - a nature reserve of pristine forests, waterfalls, and wildlife, 
                <a class="navbar-brand" href="?">Da Lat Flower Park</a> - a botanical garden that showcases a vast array of colorful flowers and plants, 
                <a class="navbar-brand" href="?">Lak Lake</a> - the largest natural lake in the Central Highlands, and many more.</p>
        
              
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

export default centralhighlands
