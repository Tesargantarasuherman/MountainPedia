import { Hints, Steps } from 'intro.js-react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Banner, Button, Card, Container, Footer, Navbar } from '../../components'
import ProductContext from '../../context/ProductContext'

const { ProdContext } = ProductContext;

export default function Home() {
  const [initialStep, setInitialStep] = useState(0)
  const [stepsEnabled, setStepsEnabled] = useState(localStorage.getItem('intro') == 'true' ? false : true)
  const [hintsEnabled, setHintsEnabled] = useState(true)
  const props_product = useContext(ProdContext)

  useEffect(() => {
    props_product.getAllProduct()
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
            props_product.product.map(product => {
              return (
                <Card />
              )
            })
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
