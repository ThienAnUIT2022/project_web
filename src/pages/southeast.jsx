import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import images from '../assets/images';


function southeast() {
  return (
    <div>
      <Header></Header>
      <main class="container">      
        <div class="row">
          <div class="col-md-8">
            <article class="blog-post">  
              <h2 class="display-5 fw-bold text-body-emphasis">Southeast Vietnam</h2>
              <p class="text-end published-end">Published on <time datetime="2024-03-28">March 28, 2024</time></p>

              <p>Southeast Vietnam includes 
                <a class="navbar-brand" href="?">Binh Phuoc</a>, 
                <a class="navbar-brand" href="?">Tay Ninh</a>, 
                <a class="navbar-brand" href="?">Binh Duong</a>, 
                <a class="navbar-brand" href="?">Dong Nai</a>, 
                <a class="navbar-brand" href="?">Ba Ria - Vung Tau</a>, and 
                <a class="navbar-brand" href="?">Ho Chi Minh City</a>. Southeast Vietnam borders the Mekong River Delta to the west and southwest, and the East Sea to the east and southeast. It also shares a border with Cambodia to the northwest. </p>
              <p>The geography of Vietnam's Southeast is influenced by a tropical climate, with high humidity and frequent rainfall throughout the year. Monsoons also impact the region, bringing a rainy season from May to November and a dry season from December to April.</p>
              <img src={images['Núi Bà Đen 1.jpg']} alt="" vspace="30" class="image"/>
              <p>The region is dominated by the Mekong River Delta, which is the largest delta in Vietnam and one of the most productive agricultural areas in the world. The Mekong River is an important source of water and food for the region. Besides, several other major rivers, including Dong Nai River and Saigon River, also provide water and facilitate transportation for the region.</p>
              <p>Southeast Vietnam is also known for its beautiful beaches and bustling cities. Some notable attractions in the region include the iconic Ben Thanh Market in Saigon - which offers a diverse selection of goods, 
                <a class="navbar-brand" href="?">Cu Chi Tunnels</a> - a popular destination for history and warfare enthusiasts, 
                <a class="navbar-brand" href="?">Front Beach (Bai Truoc)</a> - a picturesque beach in Vung Tau renowned for crystal-clear water and powdery sands, 
                <a class="navbar-brand" href="?">Ba Den Mountain</a> - a significant pilgrimage site for Buddhists, and many more. </p>        
              
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

export default southeast
