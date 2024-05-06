import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import images from '../assets/images';


function redriver() {
  return (
    <div>
      <Header></Header>
      <main class="container">      
      <div class="row">
        <div class="col-md-8">
          <article class="blog-post">  
            <h2 class="display-5 fw-bold text-body-emphasis">Northeast Vietnam Geography</h2>
            <p class="text-end published-end">Published on <time datetime="2024-03-28">March 28, 2024</time></p>

            <p>The Red River Delta comprises 10 provinces and 1 city, namely 
                <a class="navbar-brand" href="?">Bac Ninh</a>, 
                <a class="navbar-brand" href="?">Ha Nam</a>, 
                <a class="navbar-brand" href="?">Hanoi</a>, 
                <a class="navbar-brand" href="?">Hai Duong</a>, 
                <a class="navbar-brand" href="?">Hai Phong</a>, 
                <a class="navbar-brand" href="?">Hung Yen</a>, 
                <a class="navbar-brand" href="?">Nam Dinh</a>, 
                <a class="navbar-brand" href="?">Ninh Binh</a>, 
                <a class="navbar-brand" href="?">Thai Binh</a>, 
                <a class="navbar-brand" href="?">Vinh Phuc</a>, and 
                <a class="navbar-brand" href="?">Quang Ninh</a>. It is bordered by the Northeast region to the north, the Northwest region to the west, and the Gulf of Tonkin to the east.</p>
            <p>The geography of Vietnam’s Red River Delta is influenced by a humid tropical monsoon climate. It has hot summers and cool winters, and experiences a high level of rainfall throughout the year. This climate fosters the region's agricultural productivity, especially in rice cultivation. It is one of the major rice-producing regions in Vietnam, with a long history of rice cultivation dating back to ancient times.</p>
            <img src={images['Vịnh Hạ Long 1.jpg']} alt="" vspace="30" class="image"/>
            <p>The Red River Delta is home to an abundance of tourist destinations, such as the stunning 
                <a class="navbar-brand" href="?">Tam Coc - Bich Dong</a> with its limestone cliffs and rice paddies, the oldest 
                <a class="navbar-brand" href="?">Cuc Phuong National Park</a> with its diverse flora and fauna, the peaceful 
                <a class="navbar-brand" href="?">Hoan Kiem Lake</a> that is a must-visit in any Hanoi travel itinerary, the picturesque 
                <a class="navbar-brand" href="?">Tam Dao</a> with cool weather and breathtaking scenery, and the world-renowned 
                <a class="navbar-brand" href="?">Ha Long Bay</a> - a UNESCO World Heritage Site with towering limestone islands and emerald waters.</p>
      
            
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

export default redriver
