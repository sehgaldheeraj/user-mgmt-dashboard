/* eslint-disable import/no-anonymous-default-export */
// import "./pagination.css";
export default ({ currentPage, numArray, numOfPages, setCurrentPage }) => {
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function jumpToFirst() {
    setCurrentPage(1);
  }
  function changeCurrPage(i) {
    setCurrentPage(i);
  }
  function nextPage() {
    if (currentPage !== numOfPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  function jumpToLast() {
    setCurrentPage(numOfPages);
  }
  return (
    <nav className="nav-container d-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={jumpToFirst}>
            <i className="fa-solid fa-backward"></i>
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={prevPage}>
            <i className="fa-solid fa-caret-left"></i>
          </button>
        </li>
        {numArray.map((n, i) => (
          <li
            className={`page-item ${currentPage === n ? "active" : ""}`}
            key={i}
          >
            <button className="page-link" onClick={() => changeCurrPage(n)}>
              {n}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link" onClick={nextPage}>
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={jumpToLast}>
            <i className="fa-solid fa-forward"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};
