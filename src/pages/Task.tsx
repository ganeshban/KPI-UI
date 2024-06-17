import TextBox from "../components/TextBox";
import Card from "../components/Card";
import Table from "../components/Table";
import { useRef } from "react";

function Task() {
  const data = [
    {
      0: 1,
      1: "New Member",
    },
    {
      0: 2,
      1: "Monthly saving",
    },
    {
      0: 3,
      1: "Loan Collection",
    },
    {
      0: 4,
      1: "Daily Colloction",
    },
    {
      0: 5,
      1: "Share Collection",
    },
    {
      0: 6,
      1: "Saving Deposite",
    },
  ];
  const columns = ["Id", "Task Name"];
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
    <div className="row ">
      <Card title="Task Form" icon="group" className="col-sm">
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
      <Card title="List" icon="list" className="col">
        <Table
          columnList={columns}
          tableData={data}
          actionButtons={actionColumns}
        ></Table>
      </Card>
    </div>
  );
}

export default Task;
