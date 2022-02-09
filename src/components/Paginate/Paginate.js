import React from "react";

const Paginate = ({ productPerPage, totalProduct, paginateHandeler }) => {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="paginate-container">
      <div>
        {pageNumber.map((number) => (
          <button
            className="paginate-btn"
            onClick={() => paginateHandeler(number)}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Paginate;
