import React from 'react';
import _ from "lodash"

const Pagination = ({itemsCount, itemsPerPage, currentPage, onPageChange}) => {
    const pagesCount = Math.ceil(itemsCount / itemsPerPage);
    const pages = _.range(1, pagesCount + 1);
    if (pages.length <= 1) return <p className="text-center pt-2 text-muted">没有更多了，康康其他的</p>;

    return (
        <div className="list-group-item">
            <nav>
                <ul className="pagination d-flex justify-content-center">
                    <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                        <button className="page-link"
                                onClick={() => onPageChange(currentPage - 1)}
                        >&laquo;</button>
                    </li>
                    {pages.map(page => (
                        <li className={currentPage === page ? "page-item active" : "page-item"}
                            key={page}
                        >
                            <button className="page-link" onClick={() => onPageChange(page)}>
                                {page}
                            </button>
                        </li>))}
                    <li className={currentPage === pages.length ? "page-item disabled" : "page-item"}>
                        <button className="page-link"
                                onClick={() => onPageChange(currentPage + 1)}
                        >&raquo;</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;