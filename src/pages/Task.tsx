import TextBox from "../components/TextBox";
import Card from "../components/Card";
import Table from "../components/Table";
import { useRef } from "react";

function Task() {
  const data = [
    {
      id: 1,
      task: "New Member",
    },
    {
      id: 2,
      task: "Monthly saving",
    },
    {
      id: 3,
      task: "Loan Collection",
    },
    {
      id: 4,
      task: "Daily Colloction",
    },
  ];
  const columns = ["Id", "Task Name", "Action"];
  const form = useRef<HTMLFormElement>(null);
  return (
    <div className="container p-2 m-5 justify-content-center">
      <div className="row row-cols-10">
        <Card title="Task Form" icon="group" className="col">
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
          <Table columnList={columns}>
            <tbody>
              {data.map((a, b) => {
                return (
                  <tr key={b}>
                    <td>{a.id}</td>
                    <td>{a.task}</td>
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

export default Task;
