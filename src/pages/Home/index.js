import React from 'react'
import { Banner, Button, Container, Navbar } from '../../components'

export default function Home() {
  return (
    <div style={{marginHorizontal:'15%'}}>
    <Navbar />
    <Banner />
    <Container props={
        <>
            <Button title="Hiking"/>
            <Button title="Camping"/>
            <Button title="Guides"/>
        </>
    }/>
    </div>
  )
}
