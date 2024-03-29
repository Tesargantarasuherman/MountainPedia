import { Hints, Steps } from 'intro.js-react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'
import './index.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { GrNext, GrPrevious } from 'react-icons/gr'
// import { getAllProduct } from '../../actions'
import { Banner, Button, Card, CardGuide, CardImage, Container, Footer, Navbar, Pagination } from '../../components'
import { connect, useDispatch, useSelector } from 'react-redux'
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
  }, [dispatch])

  // redux
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



  const countDays = (start_date, end_date) => {
    var date1 = new Date(start_date);
    var date2 = new Date(end_date);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Difference_In_Days;
  }

  const renderProducts = () => {
    if (isLoading) {
      return(
        <>
          <div className='container-guide-skeleton'>
            <SkeletonTheme baseColor="#dfe6e9" highlightColor="#006E5D" >
              <Skeleton count={1} className='card-guide-skeleton'/>
              <Skeleton count={1} height={15} width={180} />
              <Skeleton count={1} height={10} width={180} />
            </SkeletonTheme>
          </div>
          <div className='container-guide-skeleton'>
            <SkeletonTheme baseColor="#dfe6e9" highlightColor="#006E5D" >
              <Skeleton count={1} className='card-guide-skeleton'/>
              <Skeleton count={1} height={15} width={180} />
              <Skeleton count={1} height={10} width={180} />
            </SkeletonTheme>
          </div>
          <div className='container-guide-skeleton'>
            <SkeletonTheme baseColor="#dfe6e9" highlightColor="#006E5D" >
              <Skeleton count={1} className='card-guide-skeleton'/>
              <Skeleton count={1} height={15} width={180} />
              <Skeleton count={1} height={10} width={180} />
            </SkeletonTheme>
          </div>
          <div className='container-guide-skeleton'>
            <SkeletonTheme baseColor="#dfe6e9" highlightColor="#006E5D" >
              <Skeleton count={1} className='card-guide-skeleton'/>
              <Skeleton count={1} height={15} width={180} />
              <Skeleton count={1} height={10} width={180} />
            </SkeletonTheme>
          </div>
        </>
      )
    }
    if (error) {
      // return error
        return (
          <div>
            <p>error</p>
          </div>
        )
    }

    return (
      currentPosts?.map(product => {
        return (
          <CardGuide
            type={product.type}
            id={product.id}
            title={product.name}
            image={product.images[0]}
            price={product.price}
            url={'/detail'}
            location={product.location}
            date={countDays(product.start_date, product.end_date)}
            start_date={moment(product.start_date).locale('id').format('D MMMM')}
            end_date={moment(product.end_date).locale('id').format('D MMMM YYYY')}
            participant={`Sisa ${product?.participant?.[0]?.list_participant?.length >= 0 ? product.total_slot - product?.participant?.[0]?.list_participant?.length : product.total_slot} dari ${product.total_slot}`}
          />
        )
      })
    )

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
      <div className='container-sort'>
        <Button title="Hiking" />
        <Button title="Camping" />
        <Button title="Guides" />
      </div>
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
      <div className='container-pagination'>
          <ReactPaginate
            onPageChange={paginate}
            pageCount={Math.ceil(products.length / postPerPage)}
            previousLabel={<GrPrevious />}
            nextLabel={<GrNext/>}
            containerClassName={'pagination'}
            pageLinkClassName={'page-number'}
            previousLinkClassName={'page-number'}
            nextLinkClassName={'page-number'}
            activeLinkClassName={'active'}
          />
          {/* <Pagination totalPost={product.length} postPerPage={postPerPage} paginate={paginate} currentPage={currentPage} /> */}
      </div>

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

