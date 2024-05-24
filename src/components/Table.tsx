import { ReactNode } from "react";

interface Props {
  columnList: string[];
  children: ReactNode;
}

const Table = ({ children, columnList }: Props) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            {columnList.map((col, i) => {
              return (
                <th className="align-top" key={i}>
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};

export default Table;
