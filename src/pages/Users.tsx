import TextBox from "../components/TextBox";
import Table from "../components/Table";
import { useRef } from "react";
import { Panel } from "primereact/panel";
import NewTable from "../components/NewTable";
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
  const formHeader = (
    <div className="">
      <i className="pi pi-user mx-2"></i>
      <span>User Management</span>
    </div>
  );
  const listHeader = (
    <div className="">
      <i className="pi pi-bars mx-2"></i>
      <span>User List</span>
    </div>
  );
  return (
    <div className="row">
      <Panel header={formHeader} className="col-sm">
        <form ref={form} className="needs-validation" noValidate>
          {columns.map((col, i) => {
            return (
              <TextBox
                key={i}
                label={typeof col === "string" ? col : col.name}
              />
            );
          })}
          <div className="row mx-0 mt-2">
            {/* <Button
              severity="success"
              label="Save"
              outlined
              icon="pi pi-save"
              size="small"
            /> */}
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
          <div className="row mb-2"></div>
        </form>
      </Panel>
      <Panel className="col-sm" header={listHeader}>
        <Table columnList={columns} actionButtons={actionColumns} />
      </Panel>
      <Panel className="col-sm" header={listHeader}>
        <NewTable />
      </Panel>
    </div>
  );
}

export default Users;
