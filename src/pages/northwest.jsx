import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/destination.css';
import images from '../assets/images';


function northwest() {
  return (
    <div>
      <Header></Header>
          <main class="container">      
      <div class="row">
        <div class="col-md-8">
          <article class="blog-post">  
            <h2 class="display-5 fw-bold text-body-emphasis">Northwest Vietnam</h2>
            <p class="text-end published-end">Published on <time datetime="2024-03-28">March 28, 2024</time></p>

            <p>The Northwest region of Vietnam includes the provinces of 
                <a class="navbar-brand" href="?">Lao Cai</a>, 
                <a class="navbar-brand" href="?">Yen Bai</a>, 
                <a class="navbar-brand" href="?">Dien Bien</a>, 
                <a class="navbar-brand" href="?">Hoa Binh</a>, 
                <a class="navbar-brand" href="?">Lai Chau</a>, and 
                <a class="navbar-brand" href="?">Son La</a>. It is a mountainous region located in the upper part of Vietnam, sharing borders with China and Laos. The geography of Vietnam’s Northwest is characterized by its rugged mountains, with 
                <a class="navbar-brand" href="?">Hoang Lien Son mountain</a> range dominating the landscape. The Northwest is also distinguished by its stunning natural beauty, with terraced rice paddies, towering mountains, and lush forests.</p>
            <img src={images['Mù Cang Chải 1.jpg']} alt="" vspace="30" class="image"/>
            <p>Compared to other regions of Vietnam, the climate in the Northwest is cooler and drier, with temperatures ranging from 10 to 20 degrees Celsius in the winter and 20 to 30 degrees Celsius in the summer.</p>
            <p>The Northwest also offers plenty of popular tourist destinations, such as the culturally diverse mountain town of 
                <a class="navbar-brand" href="?">Sapa</a>, 
                <a class="navbar-brand" href="?">Fansipan</a> - the highest peak in Vietnam, the beautiful terraced rice paddies of 
                <a class="navbar-brand" href="?">Mu Cang Chai</a>, the historically significant city of 
                <a class="navbar-brand" href="?">Dien Bien Phu</a>, the peaceful valley of 
                <a class="navbar-brand" href="?">Mai Chau</a>, etc.</p>
            
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

export default northwest
