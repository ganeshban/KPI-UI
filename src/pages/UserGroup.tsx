import TextBox from "../components/TextBox";
import Card from "../components/Card";
import Table from "../components/Table";
import { useRef } from "react";
// import { useEffect, useRef, useState } from "react";
// import // UserGroupI,
// // deleteByID,
// // getAllUserGroup,
// "../services/useUserGrps";
// const x = getAllUserGroup();
function UserGroup() {
  // const [data, setData] = useState<UserGroupI[]>([]);
  // useEffect(() => {
  //   x.then((a) => setData(a));
  // });

  const columns = ["Id", "Group Name"];
  const actionColumns = [
    {
      // name: "edit",
      icon: "edit",
      className: "text-primary",
      onClick: "edit button",
    },
    {
      // name: "remove",
      icon: "delete_forever",
      className: "text-danger",
      onClick: "delete button",
    },
  ];
  const form = useRef<HTMLFormElement>(null);

  // function handleEditClick(id: number): void {
  //   deleteByID(id);
  // }

  return (
    <div className="row">
      <Card title="User Group Management" icon="group" className="col-sm">
        <form ref={form} className="needs-validation" noValidate>
          {columns.map((col, i) => {
            return col != "Action" && <TextBox key={i} label={col}></TextBox>;
          })}
          <div className="row mx-0 mt-5">
            <button
              type="submit"
              onClick={(event) => {
                console.log(form);
                event.preventDefault();
                form.current?.submit();
              }}
              className="btn col btn-outline-success"
            >
              Save
            </button>
          </div>
          <div className="row mb-5"></div>
        </form>
      </Card>
      <Card title="List" icon="list" className="col-sm">
        <Table columnList={columns} actionButtons={actionColumns}>
          {/* <tbody>
              {data.map((a, b) => {
                return (
                  <tr key={b}>
                    <td>{a.userGrpID}</td>
                    <td>{a.userGrpName}</td>
                    <td>
                      <i
                        className="material-icons fs-3 text-primary"
                        onClick={() => handleEditClick(a.userGrpID)}
                      >
                        edit
                      </i>
                      <i className="material-icons fs-3 text-danger">
                        delete_forever
                      </i>
                    </td>
                  </tr>
                );
              })}
            </tbody> */}
        </Table>
      </Card>
    </div>
  );
}

export default UserGroup;
