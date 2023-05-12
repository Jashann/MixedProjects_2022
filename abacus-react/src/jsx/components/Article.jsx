import React from 'react'
import parse from 'html-react-parser';
import { CAROUSEL_TYPES,} from '../URL_ROUTES.data'
import { ARTICLES_IMAGES, ARTICLES_TITLES } from '../CONTENT.data'
import Carousel from './Carousel'


function Article({children, title, image}) {

  return (
    <div className="container mt-3 article text-justify">
        <h3 className='text-center'>{title}</h3>
        <div className='align-items-center article_img_div justify-content-center'  ><img src={image} alt="Article" /></div>
        {parse(children)}

        <Carousel id="articles_carousel" bgColor="bg-light" article_titles={ARTICLES_TITLES} article_imgs={ARTICLES_IMAGES} type={CAROUSEL_TYPES.ARTICLE} >
          <h1 class="text-center mt-3"> Similar <span class="text-primary">Articles</span></h1>
        </Carousel>

    </div>
  )
}

export default Article