import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import "bootstrap/dist/jsbootstrap.bundle.min.js/bootstrap.bundle.js";

export type dataField = { [key: number | string]: string | number };
export interface ActionButtonColumn {
  className?: string;
  icon?: string;
  name?: string;
  onClick?: string;
}
export interface ColumnType {
  name?: string;
  sortable?: boolean;
  width?: number | "auto";
  align?: "center" | "left" | "justify" | "right" | "char" | undefined;
}
interface Props {
  actionButtons?: ActionButtonColumn[];
  itemsPerPage?: number[];
  columnList: ColumnType[] | string[];
  tableData?: dataField[];
}

const Table = ({
  columnList,
  actionButtons,
  tableData,
  itemsPerPage = [10, 20, 50],
}: Props) => {
  const totalNoOfData = tableData ? tableData.length : 0;
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(itemsPerPage[0]);
  const totalPageNo = Math.ceil(totalNoOfData / itemPerPage);
  const start = (currentPageNumber - 1) * itemPerPage;
  const end = start + itemPerPage;
  const data = tableData?.slice(start, end);
  const [sortedColumn, setSortedColumn] = useState(-1);
  const [isAsc, setSortOrderAsc] = useState(true);
  const sortColumn = (colIndex: number) => {
    colIndex == sortedColumn && setSortOrderAsc(!isAsc);
    setSortedColumn(colIndex);
    // tableData?.sort((a, b) => a - b);
  };
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            {columnList.map((col, i) => {
              const alignvalue =
                typeof col === "string" ? undefined : col.align;
              return (
                <td
                  align={alignvalue}
                  className="align-top"
                  key={i}
                  onClick={() => {
                    typeof col != "string" &&
                      col.sortable === true &&
                      sortColumn(i);
                  }}
                >
                  <h6>{typeof col === "string" ? col : col.name}</h6>
                  {sortedColumn === i && (
                    <i className={`material-icons ps-5 px-2`}>
                      {isAsc ? "vertical_align_top" : "vertical_align_bottom"}
                    </i>
                  )}
                </td>
              );
            })}
            {actionButtons && (
              <td align="center" className="align-top">
                <h6>Action</h6>
              </td>
            )}
          </tr>
        </thead>
        <tbody>
          {data?.map((a, b) => (
            <tr key={b}>
              {columnList.map((x, y) => {
                const alignvalue = typeof x === "string" ? "left" : x.align;
                const widthvalue = typeof x === "string" ? undefined : x.width;
                return (
                  <td align={alignvalue} key={y} width={widthvalue}>
                    {a[y]}
                  </td>
                );
              })}
              {actionButtons && (
                <td align="center" width={50 * actionButtons.length}>
                  {actionButtons.map((act, __) => {
                    return (
                      <i
                        key={__}
                        onClick={() => console.log(act.onClick)}
                        title={act.name}
                        className={`material-icons px-2 ${act.className}`}
                      >
                        {act.icon}
                      </i>
                    );
                  })}
                </td>
              )}
            </tr>
          ))}
        </tbody>
        {!data && (
          <tfoot>
            <tr>
              <td
                colSpan={
                  actionButtons ? columnList.length + 1 : columnList.length
                }
                className="text-center"
              >
                Data Not Found
              </td>
            </tr>
          </tfoot>
        )}
      </table>
      {data && (
        <ul className="pagination pagination-sm">
          {
            <li
              className={`page-item ${
                currentPageNumber == 1 ? "disabled" : ""
              }`}
            >
              <a className="page-link" onClick={() => setCurrentPageNumber(1)}>
                First
              </a>
            </li>
          }
          {
            <li
              className={`page-item ${
                currentPageNumber == 1 ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                onClick={() => {
                  setCurrentPageNumber(currentPageNumber - 1);
                }}
              >
                Previous
              </a>
            </li>
          }
          {Array(Math.min(totalPageNo, 5))
            .fill("")
            .map((_, b) => {
              let curPage: number;
              curPage = Math.floor(currentPageNumber / 5) * 5 + b;
              if (currentPageNumber < 5) curPage = 1 + b;
              if (currentPageNumber + 5 > totalPageNo)
                curPage = Math.abs(totalPageNo + b - 5 + 1);
              if (totalPageNo < 5) curPage = b + 1;
              return (
                <li
                  key={b}
                  className={`page-item page-item-lg ${
                    currentPageNumber == curPage ? "disabled" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    onClick={() => setCurrentPageNumber(curPage)}
                  >
                    {curPage}
                  </a>
                </li>
              );
            })}
          {
            <li
              className={`page-item ${
                currentPageNumber >= totalPageNo ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                onClick={() => setCurrentPageNumber(currentPageNumber + 1)}
              >
                Next
              </a>
            </li>
          }
          {
            <li
              className={`page-item ${
                currentPageNumber >= totalPageNo ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                onClick={() => setCurrentPageNumber(totalPageNo)}
              >
                Last
              </a>
            </li>
          }

          <button
            className="btn btn-outline-primary btn-sm dropdown-toggle ms-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {itemPerPage}
          </button>
          <ul className="dropdown-menu">
            {itemsPerPage.map((a, b) => {
              return (
                <li
                  className="dropdown-item"
                  onClick={() => setItemPerPage(a)}
                  key={b}
                >
                  {a}
                </li>
              );
            })}
          </ul>
        </ul>
      )}
    </div>
  );
};

export default Table;
{
  /* <select className="form-select ms-2" id="sel1" name="sellist1">
              {itemsPerPage.map((a, b) => {
                return <option key={b}>{a}</option>;
              })}
            </select> */
}
