import { Hints, Steps } from 'intro.js-react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAllProduct } from '../../actions'
import { Banner, Button, Card, Container, Footer, Navbar, Pagination } from '../../components'
import { connect } from 'react-redux'

export const Home =({product,getAllProduct})=> {
  const [initialStep, setInitialStep] = useState(0)
  const [stepsEnabled, setStepsEnabled] = useState(localStorage.getItem('intro') == 'true' ? false : true)
  const [hintsEnabled, setHintsEnabled] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const [currentPosts,setCurrentPosts] = useState([]);


  
  useEffect(() => {
    getAllProduct();
    setTimeout(()=>{
      setCurrentPosts(product?.slice(indexOfFirstPost,indexOflastPost))
    },1000)
  },[product])

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
  const paginate =(pageNumber)=>{
    setCurrentPage(pageNumber)
  }


  const onExit = () => {
    setStepsEnabled(false)
    localStorage.setItem('intro', true)
  };
  const renderProducts =()=>{
    if(currentPosts.length >=1){
      return(
        currentPosts.map(product => {
          return (
            <Card product={product}/>
          )
        })
      )
    }
    else{
      return(
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
      <Container el={
        <Banner />
      } />
      <Container marginTop={150} el={
        <>
          <Button title="Hiking" />
          <Button title="Camping" />
          <Button title="Guides" />
        </>
      } />
      <Container marginTop={50} justify='flex-start' el={
        <>
          {
           renderProducts()
          }
        </>
    } />
      <Container marginTop={50} justify="center" el={
        <>
        <Pagination totalPost={product.length} postPerPage={postPerPage} paginate={paginate} currentPage={currentPage}/>
        </>
      }
      
      />
      <Container
        marginTop={50}
        el={
          <>
            <Footer />
          </>
        }
      />
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

