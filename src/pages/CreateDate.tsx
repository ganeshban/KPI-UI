import TextBox from "../components/TextBox";
import Card from "../components/Card";
import Table from "../components/Table";
import { useRef } from "react";

function CreateDate() {
  const data = [
    {
      engDate: "2024-05-12",
      nepDate: "2080-01-20",
    },
    {
      engDate: "2024-05-11",
      nepDate: "2080-01-19",
    },
    {
      engDate: "2024-05-10",
      nepDate: "2080-01-18",
    },
  ];
  const columns = ["AD", "BS", "Action"];
  const form = useRef<HTMLFormElement>(null);
  return (
    <div className="container p-2 m-5 justify-content-center">
      <div className="row row-cols-10">
        <Card title="Date Management" icon="date_range" className="col">
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
                    <td>{a.engDate}</td>
                    <td>{a.nepDate}</td>
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

export default CreateDate;
