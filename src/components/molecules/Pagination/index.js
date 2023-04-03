import React from 'react'
import './index.scss'
function Pagination({ postPerPage, totalPost,paginate,currentPage }) {
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }
    const changePage=(number)=>{
        window.scrollTo(0, 600);
        paginate(number)
    }
    return (
        <nav className='pagination'>
                {
                    pageNumbers.map(number => (
                        <div key={number}>
                            <button onClick={()=>changePage(number)} className={`${number == currentPage ?'active':''}`}>
                                {number}
                            </button>
                        </div >
                    )
                    )
                }
        </nav>
    )
}

export default Pagination
