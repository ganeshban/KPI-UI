import TextBox from "../components/TextBox";
import Card from "../components/Card";
import Table from "../components/Table";
import { useEffect, useRef, useState } from "react";
import {
  UserGroupI,
  deleteByID,
  getAllUserGroup,
} from "../services/useUserGrps";
const x = getAllUserGroup();
function UserGroup() {
  const [data, setData] = useState<UserGroupI[]>([]);
  useEffect(() => {
    x.then((a) => setData(a));
  });

  const columns = ["Id", "Group Name", "Action"];
  const form = useRef<HTMLFormElement>(null);

  function handleEditClick(id: number): void {
    deleteByID(id);
  }

  return (
    <div className="container p-2 m-5 justify-content-center">
      <div className="row row-cols-10">
        <Card title="User Group Management" icon="group" className="col">
          <form
            ref={form}
            className="needs-validation"
            noValidate
            // ref={form}
          >
            {/* <TextBox label="Username" required={true} />
            <TextBox minlength={8} label="Passord" type="password" /> */}
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
        <Card title="List" icon="list" className="col">
          <Table columnList={columns}>
            <tbody>
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
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

export default UserGroup;
