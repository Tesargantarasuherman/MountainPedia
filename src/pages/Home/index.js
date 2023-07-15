import { Hints, Steps } from 'intro.js-react'
import React, { useState } from 'react'
import { useEffect } from 'react'
// import { getAllProduct } from '../../actions'
import { Banner, Button, Card, CardGuide, CardImage, Container, Footer, Navbar, Pagination } from '../../components'
import { connect, useDispatch, useSelector } from 'react-redux'

import './index.scss'
import ReactPaginate from 'react-paginate'
import { getAllProduct, selectProduct } from '../../features/productSlice'

// export const Home = ({ product, getAllProduct }) => {
export const Home = () => {
  const [initialStep, setInitialStep] = useState(0)
  const [stepsEnabled, setStepsEnabled] = useState(localStorage.getItem('intro') == 'true' ? false : true)
  const [hintsEnabled, setHintsEnabled] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  // const [currentPosts, setCurrentPosts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  //  Get Current Post
  const indexOflastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOflastPost - postPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOflastPost);

  useEffect(() => {
    dispatch(getAllProduct());
    }, [])
  

  // useEffect(() => {
  //   console.log(products)
  //   setCurrentPosts(products?.slice(indexOfFirstPost, indexOflastPost))
  //   setTimeout(() => {
  //     console.log(products);
  //   }, 1000);
  // }, [products]);

   

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

  // Change Page
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }
  const paginate = ({ selected }) => {
    window.scrollTo(0, 600);
    setCurrentPage(selected + 1);
 };

  const onExit = () => {
    setStepsEnabled(false)
    localStorage.setItem('intro', true)
  };

  const isLoading = useSelector((state) => state.product.isLoading)
  const error = useSelector((state) => state.product.hasError)

  if (isLoading) {
      return 'loading...'
  }
  if (error) {
      // return error
      <div><p>Data Tidak Ada</p></div>
  }

  const renderProducts = () => {
    // if (currentPosts?.length >= 1) {
      return (
        currentPosts?.map(product => {
          return (
            <CardGuide id={product.id} title={product.name} image={product.images[0]} price={product.price} location={product.location}/>
          )
        })
      )
    // }
    // else {
    //   return (
    //     <div className="loading">
    //       Loading
    //     </div>
    //   )
    // }
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
           <ReactPaginate
                  onPageChange={paginate}
                  pageCount={Math.ceil(products.length / postPerPage)}
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  containerClassName={'pagination'}
                  pageLinkClassName={'page-number'}
                  previousLinkClassName={'page-number'}
                  nextLinkClassName={'page-number'}
                  activeLinkClassName={'active'}
               />
          {/* <Pagination totalPost={product.length} postPerPage={postPerPage} paginate={paginate} currentPage={currentPage} /> */}
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

// const mapStateToProps = (state) => ({
//   product: state?.product?.product
// })

// const mapDispatchToProps = {
//   getAllProduct
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home

