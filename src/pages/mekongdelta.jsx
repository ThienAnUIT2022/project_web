import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import images from '../assets/images';


function mekongdelta() {
  return (
    <div>
      <Header></Header>
          <main class="container">      
      <div class="row">
        <div class="col-md-8">
          <article class="blog-post">  
            <h2 class="display-5 fw-bold text-body-emphasis">Mekong Delta Geography of Vietnam</h2>
            <p class="text-end published-end">Published on <time datetime="2024-03-28">March 28, 2024</time></p>

            <p>The Mekong Delta includes 
                <a class="navbar-brand" href="?">Long An</a>, 
                <a class="navbar-brand" href="?">Tien Giang</a>, 
                <a class="navbar-brand" href="?">Ben Tre</a>, 
                <a class="navbar-brand" href="?">Tra Vinh</a>, 
                <a class="navbar-brand" href="?">Vinh Long</a>, 
                <a class="navbar-brand" href="?">Dong Thap</a>, 
                <a class="navbar-brand" href="?">An Giang</a>, 
                <a class="navbar-brand" href="?">Kien Giang</a>, 
                <a class="navbar-brand" href="?">Can Tho</a>, 
                <a class="navbar-brand" href="?">Hau Giang</a>, 
                <a class="navbar-brand" href="?">Soc Trang</a>, 
                <a class="navbar-brand" href="?">Bac Lieu</a>, and 
                <a class="navbar-brand" href="?">Ca Mau</a> provinces. It is a region in southwestern Vietnam where the Mekong River empties into the South China Sea. It is the largest rice-producing region in Vietnam and is a crucial contributor to the country's food supply. The region is also famous for its lush green rice paddies, fruit orchards, and winding canals.</p>
            <p>The geography of Vietnam in the Mekong Delta is characterized by a tropical climate. There are two main seasons here: the rainy season from May to November, and the dry season from December to April. The region is also affected by annual flooding, which provides nutrient-rich sediment to the rice paddies and other crops.</p>
            <img src={images['Rừng dừa Bến Tre 1.jpg']} alt="" vspace="30" class="image"/>
            <p>Tourism is an important industry in the Mekong Delta, with visitors coming to explore the floating markets, visit the traditional villages, and experience the unique culture of the region. Some of the most popular tourist attractions in the Mekong Delta include Cai Rang Floating Market - one of the largest and most famous floating markets in the region, Binh Thuy Ancient House - a well-preserved ancient house featuring a unique blend of French and Vietnamese architectural styles, Phong Dien Orchard - a fruit orchard offering a wide variety of tropical fruits, Thien Vien Truc Lam Phuong Nam - a Buddhist monastery offering stunning views of the surrounding countryside, and 
                <a class="navbar-brand" href="?">Phu Quoc</a> - a pristine island known for its captivating beaches, coral reefs, and marine life.</p>
      
            
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

export default mekongdelta
