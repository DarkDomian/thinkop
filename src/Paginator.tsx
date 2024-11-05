import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

import { FaArrowRight } from "react-icons/fa";

const itemRender: PaginationProps['itemRender'] = (page, type, originalElement) => {
  if (type === 'prev') {
    return page === 0 ? <></> : <a><FaArrowRight className='rotate-180'/></a>;
  }
  if (type === 'next') {
    return page === 5 ? <></> : <a><FaArrowRight /></a>;
  } 
  // if (type === 'page') {
    // return 
    // if (element === 1 || element === 4 || Math.abs(element - 1) <= 1) {
    //   return originalElement;
    // }
    // return <span className="ant-pagination-item-ellipsis">...</span>; // Троеточие для скрытых страниц
  // }

  return originalElement;
};

const Paginator: React.FC = () => {

    
    return (
        <>
        <Pagination total={50} itemRender={itemRender} showLessItems/>
        </>
    )
}

export default Paginator;