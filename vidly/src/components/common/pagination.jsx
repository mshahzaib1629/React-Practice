import React from 'react';
import _ from 'lodash'; // _ is used as convension for importing lodash library
import PropTypes from 'prop-types';     //prop-types library is used to declare props (with their types) to be passed to this component

const Pagination = (props) => {

    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pageCount + 1);

    if(pageCount === 1) return null;
    return <nav>
        <ul className="pagination">
            {pages.map(page => (
                <li key= {page} className={page === currentPage ? "page-item active":"page-item"}>
                    <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                </li>
            ))}

        </ul>
    </nav>;
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;