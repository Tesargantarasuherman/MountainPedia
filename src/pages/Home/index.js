import React from 'react'
import { Banner, Button, Card, Container, Navbar } from '../../components'

export default function Home() {
  return (
    <div>
    <Navbar />
    <Banner />
    <Container props={
        <>
            <Button title="Hiking"/>
            <Button title="Camping"/>
            <Button title="Guides"/>
        </>
    }/>
    <Container props={
      <>
      <Card />
      <Card />
      </>
    } />
    </div>
  )
}
