import { Hints, Steps } from 'intro.js-react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAllProduct } from '../../actions'
import { Banner, Button, Card, Container, Footer, Navbar } from '../../components'
import { connect } from 'react-redux'

export const Home =(props)=> {
  const [initialStep, setInitialStep] = useState(0)
  const [stepsEnabled, setStepsEnabled] = useState(localStorage.getItem('intro') == 'true' ? false : true)
  const [hintsEnabled, setHintsEnabled] = useState(true)

  useEffect(() => {
    props.getAllProduct();
  }, [])

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

  const onExit = () => {
    setStepsEnabled(false)
    localStorage.setItem('intro', true)
  };
  const renderProducts =()=>{
    if(props.product.length >=1){
      return(
        props.product.map(product => {
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
      <Container marginTop={50} justify='space-between' el={
        <>
          {
           renderProducts()
          }
        </>
      } />
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
  product: state?.product.product
})

const mapDispatchToProps = {
  getAllProduct
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

