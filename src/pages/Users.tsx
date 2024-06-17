import TextBox from "../components/TextBox";
import Card from "../components/Card";
import Table from "../components/Table";
import { useRef } from "react";

function Users() {
  const columns = [
    { name: "id" },
    { name: "Username" },
    { name: "Password" },
    { name: "Email" },
    { name: "Full Name" },
    { name: "User Group" },
  ];
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
  return (
    <div className="row">
      <Card title="User Management" icon="person" className="col-sm">
        <form
          ref={form}
          className="needs-validation"
          noValidate
          // ref={form}
        >
          {/* <TextBox label="Username" required={true} />
            <TextBox minlength={8} label="Passord" type="password" /> */}
          {columns.map((col, i) => {
            return (
              <TextBox
                key={i}
                label={typeof col === "string" ? col : col.name}
              />
            );
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
      <Card title="User List" icon="list" className="col-sm">
        <Table columnList={columns} actionButtons={actionColumns} />
      </Card>
    </div>
  );
}

export default Users;
