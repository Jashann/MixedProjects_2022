import React from 'react'
import Header from '../../jsx/components/Header'
import Services from '../../jsx/components/Services'
import Contact from '../../jsx/components/Contact'
import Carousel from '../../jsx/components/Carousel'
import InternInfo from '../components/InternInfo'
import { ARTICLES_IMAGES, ARTICLES_TITLES, STUDENT_REVIEWS } from '../CONTENT.data'
import { CAROUSEL_TYPES } from '../URL_ROUTES.data'
import LinkList from '../components/LinksList'


function HomePage() {
  return (
    <>
        <Header />
        <Services />
        <Carousel id="articles_carousel" article_titles={ARTICLES_TITLES} article_imgs={ARTICLES_IMAGES} type={CAROUSEL_TYPES.ARTICLE} >
          <h1 class="text-center mt-3"> Popular <span class="text-primary">Articles</span></h1>
        </Carousel>
        <InternInfo />
        <Carousel id="reviews_carousel" reviews={STUDENT_REVIEWS} type={CAROUSEL_TYPES.STUDENT} >
          <h1 class="text-center mt-3"> Student <span class="text-primary">Reviews</span></h1>
        </Carousel>
        <Contact />
        <LinkList/>
    </>
  )
}

export default HomePage