import { Hints, Steps } from 'intro.js-react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAllProduct } from '../../actions'
import { Banner, Button, Card, CardImage, Container, Footer, Navbar, Pagination } from '../../components'
import { connect } from 'react-redux'

import './index.scss'
export const Home = ({ product, getAllProduct }) => {
  const [initialStep, setInitialStep] = useState(0)
  const [stepsEnabled, setStepsEnabled] = useState(localStorage.getItem('intro') == 'true' ? false : true)
  const [hintsEnabled, setHintsEnabled] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [currentPosts, setCurrentPosts] = useState([]);



  useEffect(() => {
    getAllProduct();
    setTimeout(() => {
      setCurrentPosts(product?.slice(indexOfFirstPost, indexOflastPost))
    }, 1000)
  }, [product])

  const [steps, setSteps] = useState([
    {
      element: ".navbar-left>p",
      intro: "Hello step",
      position: 'right',
      tooltipClass: 'myTooltipClass',
      highlightClass: 'myHighlightClass',
    },
    {
      element: ".btn-login",
      intro: "Login"
    },
    {
      element: ".navbar-right ul",
      intro: "Menu"
    }
  ])
  const [hints, setHints] = useState([])
  // Get Current Post
  const indexOflastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOflastPost - postPerPage;

  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const onExit = () => {
    setStepsEnabled(false)
    localStorage.setItem('intro', true)
  };

  const renderProducts = () => {
    if (currentPosts.length >= 1) {
      return (
        currentPosts.map(product => {
          return (
            <Card product={product} />
          )
        })
      )
    }
    else {
      return (
        <div className="loading">
          Loading
        </div>
      )
    }
  }

  return (
    <div>
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
      />
      <Hints enabled={hintsEnabled} hints={hints} />
      <div className='container-banner'>
        <Banner />
      </div>
      <Container marginTop={150} el={
        <>
          <Button title="Hiking" />
          <Button title="Camping" />
          <Button title="Guides" />
        </>
      } />
      <div className="body-list-place">
        <section className='container-list-place'>
          <div className="content-list-place">
            <div className='list-place'>
              {
                renderProducts()
              }
            </div>
          </div>
        </section>
      </div>
      <Container marginTop={50} justify="center" el={
        <>
          <Pagination totalPost={product.length} postPerPage={postPerPage} paginate={paginate} currentPage={currentPage} />
        </>
      }

      />
      <div className="body-list-place">
        <section className='container-list-place'>
          <label className='_label'>Most Recommended</label>
          <div className='list-place'>
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  product: state?.product?.product
})

const mapDispatchToProps = {
  getAllProduct
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

