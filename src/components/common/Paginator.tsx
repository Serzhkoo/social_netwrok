import React, { useState } from 'react';
import styles from './Paginator.module.css';

type PaginatorPropsType = {
  totalItemsCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
  portionSize?: number
}
export const Paginator: React.FC<PaginatorPropsType> = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.container}>
      <button
        disabled={portionNumber < 2}
        onClick={() => {
          setPortionNumber(portionNumber - 1);
        }}
      >Prev
      </button>
      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page, index) => <span key={index}
                                    onClick={() => onPageChanged(page)}
                                    className={ `${styles.page} ${currentPage === page ? styles.selectedPage : ''}`}>
          {`${page}`}</span>)}
      <button
        disabled={portionNumber >= portionCount}
        onClick={() => {
          setPortionNumber(portionNumber + 1);
        }}
      >Next
      </button>
    </div>
  );
};