import ReactPaginate from 'react-paginate';
import './Pagination.css';

export default function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="<"
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}
