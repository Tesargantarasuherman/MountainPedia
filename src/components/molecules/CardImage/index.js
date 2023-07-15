import React from 'react'
import './index.scss'
import { AiFillCaretLeft, AiOutlineEnvironment } from 'react-icons/ai'
import { Link } from 'react-router-dom'
function CardImage({id,title,description}) {
    return (
        <div className='card-image'>
            <div className="content-image" style={{backgroundImage:`url('https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')`}}>

            </div>
            <div className="__content-detail">
                <AiOutlineEnvironment />
                <label>Nusa Penida</label>
            </div>
            <div className="card-image-popup">
                <AiFillCaretLeft />
                <div className="__content">
                    <p>Nusa Penida adalah sebuah pulau bagian dari negara Republik Indonesia yang terletak di sebelah tenggara Bali yang dipisahkan oleh Selat Badung. Di dekat pulau ini terdapat juga pulau-pulau kecil lainnya yaitu Nusa Ceningan dan Nusa Lembongan</p>
                    <Link to='/region'><button>Explore Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CardImage
