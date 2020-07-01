import React from 'react'

const Pagination = (props) => {
    const paginationPagesCount = Math.ceil(props.totalUsers / props.countUsers);
    const spread = "..."; //костыльвания)
    const showPaginationPages = 5; //всего кнопок
    const pageBeforeAfter = 3; //кнопки для показа до и после текущей страницы
    let paginationPages = []; //массив с номерами страниц

    if (showPaginationPages > props.currentPage) { 
        for (let i = 1; i <= showPaginationPages; i++) {
            paginationPages.push(i);
        }
        paginationPages.push(spread, paginationPagesCount);
    } else if (props.currentPage >= showPaginationPages && props.currentPage < paginationPagesCount - pageBeforeAfter) {
        paginationPages.push(1);
        for (let i = props.currentPage - pageBeforeAfter; i <= props.currentPage + pageBeforeAfter; i++) {
            paginationPages.push(i);
        }
        paginationPages.push(spread, paginationPagesCount);
    } else if (props.currentPage >= paginationPagesCount - pageBeforeAfter) {
        paginationPages.push(1);
        for (
            let i = props.currentPage - pageBeforeAfter;
            i <= props.currentPage + (paginationPagesCount - props.currentPage);
            i++
        ) {
            paginationPages.push(i);
        }
    } else {
        for (let i = 1; i <= paginationPagesCount; i++) {
            paginationPages.push(i);
        }
    }
    return (
        <div className='col-md-12 mt-3'>
            <nav aria-label='Page navigation example'>
                <ul className='pagination pagination-sm  justify-content-center'>
                    <li className={props.currentPage !== 1 ? "page-item" : "page-item d-none"}>
                        <button
                            className='page-link bg-primary text-light'
                            onClick={() => {
                                props.setCurrentPage(props.currentPage - 1);
                            }}>
                            Previous
                            </button>
                    </li>
                    {paginationPages.map((listItem) => {
                        return (
                            <li
                                className={props.currentPage === listItem ? "page-item active" : "page-item"}
                                key={listItem}>
                                <button
                                    className='page-link'
                                    onClick={() => {
                                        props.setCurrentPage(listItem);
                                    }}>
                                    {listItem}
                                </button>
                            </li>
                        );
                    })}
                    <li className={props.currentPage === paginationPagesCount ? "d-none" : "page-item"}>
                        <button
                            className='page-link bg-primary text-light'
                            onClick={() => {
                                props.setCurrentPage(props.currentPage + 1);
                            }}>
                            Next
                            </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination