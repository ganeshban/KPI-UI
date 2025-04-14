import { useRef } from "react";
import TextBox from "../components/TextBox";
import { appName } from "../utils/Constants";
import Card from "../components/Card";
import axios from "axios";

function SMS() {
  const recever = useRef<HTMLInputElement>(null);
  const text = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);
  return (
    <div className="p-5 row justify-content-center">
      <h4 className="text-center">{appName}</h4>
      <Card
        title="SMS"
        className="col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 border rounded justify-content-center"
      >
        <form noValidate ref={form}>
          <TextBox
            controller={recever}
            label="Recever"
            required={true}
            autocomplete="recever"
          />
          <TextBox controller={text} label="Text" required={true} />
          <div className="row mt-5 px-2">
            <button
              type="submit"
              onClick={(event) => {
                // const client = new ApiClient("/user/all");
                // recever.current;
                // const data = {
                //   recever: "ganesh",
                //   text: "ban",
                // };
                // const res = client.get();
                // console.log(res, data);
                // event.preventDefault();
                form.current?.classList.add("was-validated");
                event.preventDefault();
                const api = axios.create({ baseURL: "http:/localhost:8081" });
                api.post("sms/code/create", {
                  receiver: recever.current?.value,
                  message: text.current?.value,
                  clientCode: "code",
                });
              }}
              className="btn btn-outline-success"
            >
              Send
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SMS;
