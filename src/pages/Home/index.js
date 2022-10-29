import { Hints, Steps } from 'intro.js-react'
import React, { useState } from 'react'
import { Banner, Button, Card, Container, Footer, Navbar } from '../../components'
export default function Home() {
  const [initialStep, setInitialStep] = useState(0)
  const [stepsEnabled, setStepsEnabled] = useState(true)
  const [hintsEnabled, setHintsEnabled] = useState(true)
  const [steps, setSteps] = useState([
    {
      element: ".btn-login",
      intro: "Hello step"
    },
    {
      element: ".navbar-right ul",
      intro: "World step"
    }
  ])
  const [hints, setHints] = useState([

  ])

  const onExit = () => {
    setStepsEnabled(false)
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

      <Navbar />
      <Banner />
      <Container props={
        <>
          <Button title="Hiking" />
          <Button title="Camping" />
          <Button title="Guides" />
        </>
      } />
      <Container props={
        <>
          <Card />
          <Card />
        </>
      } />
      <Container 
      props={
        <>
        <Footer />
        </>
      }
      />
    </div>
  )
}
