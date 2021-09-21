import React, { VFC, memo } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export type OnPageChangeCallback = ReactPaginateProps["onPageChange"];

interface PROPS {
  currentPage: number;
  pageCount: number;
  onPageChange: OnPageChangeCallback;
}

const Pagination: VFC<PROPS> = ({ currentPage, pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={1}
      marginPagesDisplayed={3}
      onPageChange={onPageChange}
      containerClassName="pagination"
      pageClassName="page-item num"
      previousClassName="page-item arrow"
      nextClassName="page-item arrow"
      pageLinkClassName="page-link"
      previousLabel={<ArrowBackIosIcon viewBox="-7 -7 32 32" />}
      nextLabel={<ArrowForwardIosIcon viewBox="-7 -7 32 32" />}
      breakLabel="..."
      breakClassName=""
      breakLinkClassName="break-link"
      activeClassName="active"
    />
  );
};

export const PaginationMemo = memo(Pagination);
