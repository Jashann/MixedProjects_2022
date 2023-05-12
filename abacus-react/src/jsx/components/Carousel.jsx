import React from 'react'
import { Link } from 'react-router-dom'
import { CAROUSEL_TYPES, URL_ROUTES } from '../URL_ROUTES.data'

export default function Carousel({reviews, type, children, article_titles, article_imgs, id, bgColor}) {
  return (
    <div data-aos="zoom-in" id={"carousel"+type} className={"container carousel text-center slide p-5 " + bgColor } data-bs-ride="carousel">
        <div>
            {children}
            <div className="carousel-indicators">
              { CAROUSEL_TYPES.STUDENT === type && reviews.map ( (title, index ) => <button type="button" className={index === 0 && "active"} data-bs-target={"#carousel"+type} data-bs-slide-to={index} aria-label={"Slide "+index}></button> )   }         
              { CAROUSEL_TYPES.ARTICLE === type && article_titles.map ( (title, index ) => <button type="button" className={index === 0 && "active"} data-bs-target={"#carousel"+type} data-bs-slide-to={index} aria-label={"Slide "+index}></button> )   }
            </div>
            <div className="carousel-inner">
              {
                CAROUSEL_TYPES.STUDENT === type &&
                reviews.map( (review, index)=> (
                  <div key={index} className={index === 0 ? "carousel-item align-items-center justify-content-center active" : "carousel-item align-items-center justify-content-center" }>
                    <div className='carasaul_container'>
                        <p> "{review[2]}" </p>
                        <p className='in-flex-center'> <b> By {review[1]} - <ion-icon name="person-outline"></ion-icon> </b> </p>
                    </div>
                  </div>
                ) )
              }
              {
                CAROUSEL_TYPES.ARTICLE === type && 
                article_titles.map( (title, index) => (
                  <div key={index} className={index === 0 ? "carousel-item align-items-center justify-content-center active" : "carousel-item align-items-center justify-content-center" }>
                    <div className='carasaul_container'>
                    <div className='row align-items-center'>
                      <div className='col-12 col-md-5'>
                        <img className='img-fluid' src={article_imgs[index]} alt="article" />
                      </div>
                      <div className='col-12 col-md-7 mt-5'>
                        <h2> {title} </h2>
                        <Link className='btn btn-primary rounded-pill in-flex-center my-4' to={URL_ROUTES.ARTICLES+index}> Read Now <ion-icon class="ms-1" name="information-circle-outline"></ion-icon> </Link>
                      </div>
                    </div>
                    </div>
                    
                  </div>
                ) )
              }
            </div>
            <button className=" carousel-control-prev" type="button" data-bs-target={"#carousel"+type} data-bs-slide="prev">
              <ion-icon class='text-primary' name="chevron-back-outline"></ion-icon>
            </button>
            <button className=" carousel-control-next" type="button" data-bs-target={"#carousel"+type} data-bs-slide="next">
              <ion-icon class='text-primary' name="chevron-forward-outline"></ion-icon>
            </button>
         </div>
    </div>
  )
}
