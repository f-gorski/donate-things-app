import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="paginate-nav">
            {console.log(currentPage)}
            <ul className="paginate-nav__list">
                {pageNumbers.map(number => (
                    <li key={number} className="paginate-nav__list-item">
                        <button onClick={() => paginate(number)} type="button" className={currentPage === number ? "paginate-nav__button--active" : "paginate-nav__button"}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;