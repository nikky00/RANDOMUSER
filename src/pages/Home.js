import React from 'react'
// import { Link } from 'react-router-dom'
import Image1 from '../images/icon-star.svg'
import Image2 from '../images/image-anne.jpg'
import Image3 from '../images/image-colton.jpg'
import Image4 from '../images/image-irene.jpg'
import Nav from './Nav'




export default function Home
() {
  return (
   <>
   <Nav/>
   <main className='wrapper'>
    <div className="container-user">
      <section className="user">
        <h1>10,000+ of our users love our products.</h1>
        <p>We only provide great products combined with excellent customer service. See what our satisfied customers are
          saying about our services.</p>
      </section>
      <section className="ratings">
        <div className="reviews">
          <div className="img-box">
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
          </div>
          Rated 5 Stars in Reviews
        </div>
         <div className="reviews">
          <div className="img-box">
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
          </div>
          Rated 5 Stars in Report Guru
        </div>
        <div className="reviews">
          <div className="img-box">
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
            <img src={Image1} alt="star"/>
          </div>
          Rated 5 Stars in BestTech
        </div>
      </section>
    </div>
    <div className="card-container">
      <article className="card">
        <div className="container-name">
          <img src={Image3} alt="colton"/>
          <div className="name">
            <p>Colton Smith</p>
            <p className="buyer">Verified Buyer</p>
          </div>
        </div>
        <div className="user-experience">
          "We needed the same printed design as the one we had ordered Link week prior.
          Not only did they find the original order, but we also received it in time.
          Excellent!"
        </div>
      </article>
      <article className="card">
        <div className="container-name">
          <img src={Image4} alt="irene"/>
          <div className="name">
            <p>Irene Roberts</p>
            <p className="buyer">Verified Buyer</p>
          </div>
        </div>
        <div className="user-experience">
          "Customer service is always excellent and very quick turn around. Completely
          delighted with the simplicity of the purchase and the speed of delivery."
        </div>
      </article>
      <article className="card">
        <div className="container-name">
          <img src={Image2} alt="anne"/>
          <div className="name">
            <p>Anne Wallace</p>
            <p className="buyer">Verified Buyer</p>
          </div>
        </div>
        <div className="user-experience">
          "Put an order with this company and can only praise them for the very high
          standard. Will definitely use them again and recommend them to everyone!"
        </div>
      </article>
    </div> 
    </main>
    </>
  )
}
