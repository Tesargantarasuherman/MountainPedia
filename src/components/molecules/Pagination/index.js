import React from 'react'
import './index.scss'
function Pagination({ postPerPage, totalPost,paginate,currentPage }) {
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className='pagination'>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <button onClick={()=>paginate(number)} className={`${number == currentPage ?'active':''}`}>
                                {number}
                            </button>
                        </li>
                    )
                    )
                }
            </ul>
        </nav>
    )
}

export default Pagination
