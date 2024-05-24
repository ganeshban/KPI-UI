import TextBox from "../components/TextBox";
import Card from "../components/Card";
import Table from "../components/Table";
import { useEffect, useRef, useState } from "react";
import ApiClient from "../services/ApiClient";
import { UserGroupI } from "../services/useUserGrps";

interface UserI {
  id: number;
  username: string;
  password: string;
  fullName: string;
  email: string;
  status: false;
  userGroup: UserGroupI;
}

const client = new ApiClient<UserI>("user/all").get();
function Users() {
  const [users, setUsers] = useState<UserI[]>([]);
  useEffect(() => {
    const x = client.then((a) => a.data);

    x.then((a) => {
      console.log(a);
      setUsers(a);
    });
  }, [users]);
  const columns = [
    "Id",
    "Username",
    "Password",
    "Email",
    "Full Name",
    "User Group",
    "Action",
  ];
  const form = useRef<HTMLFormElement>(null);
  return (
    <div className="container p-2 m-5 justify-content-center">
      <div className="row row-cols-10">
        <Card title="User Management" icon="person" className="col">
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
                }}
                className="btn col btn-outline-success"
              >
                Save
              </button>
            </div>
            <div className="row mb-5"></div>
          </form>
        </Card>
        <Card title="User List" icon="list" className="col">
          <Table columnList={columns}>
            <tbody>
              {users.map((a, b) => {
                return (
                  <tr key={b}>
                    <td>{a.id}</td>
                    <td>{a.username}</td>
                    <td>{a.password}</td>
                    <td>{a.email}</td>
                    <td>{a.fullName}</td>
                    {/* <td>{a.userGroup.userGrpName}</td> */}
                    <td>
                      <i className="material-icons fs-3 text-primary">edit</i>
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

export default Users;
