import React from 'react'
import { Breadcumb, Container, ImageCollage } from '../../components'
import './index.scss'
function DetailPlace() {
  return (
    <div className='detail-place' >
      <Breadcumb />
      <div >
        <ImageCollage />
      </div>
    </div>
  )
}

export default DetailPlace
