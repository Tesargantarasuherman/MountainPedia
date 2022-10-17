import React from 'react'
import SearchForm from '../../atoms/SearchForm'
import './index.scss'

export default function Banner() {
  return (
    <div className="banner">
        <div className="banner-left">
          <div className="content-banner">
            <p className='title'>Plan Your Trip with Travel Hous</p>
            <p className='description'>Plan Your Trip with Travel Hous</p>
          </div>
        </div>
        <div className="banner-right">
            <img src="https://cdn.dribbble.com/users/3251575/screenshots/18004988/media/d6a01e671362052896625a63b7a960bc.jpeg?compress=1&resize=1000x750&vertical=top" alt="" srcset="" />
        </div>
        <div className="banner-img-content">
            <img src="https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZSUyMGlsdXN0cmF0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZSUyMGlsdXN0cmF0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZSUyMGlsdXN0cmF0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
        <SearchForm />
    </div>
  )
}
