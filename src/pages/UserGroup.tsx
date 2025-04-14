import TextBox from "../components/TextBox";
import Card from "../components/Card";
import Table from "../components/Table";
import { useRef } from "react";
// import { useEffect, useState } from "react";
// import { UserGroupI, getAllUserGroup } from "../services/useUserGrps";
// const x = getAllUserGroup();
function UserGroup() {
  // const [data, setData] = useState<UserGroupI[]>([]);
  const data = [
    {
      0: 1,
      1: "New Member",
    },
    {
      0: 2,
      1: "Monthly saving",
    },
  ];

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
        <Table
          columnList={columns}
          actionButtons={actionColumns}
          tableData={data}
        />
      </Card>
    </div>
  );
}

export default UserGroup;
