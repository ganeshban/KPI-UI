interface Props {
  code?: number;
  title?: string;
  message?: string;
}
function PageNotFound({
  code = 404,
  title = "NOT FOUND",
  message = "The page that you are requested is not found.",
}: Props) {
  return (
    <div className="container my-5 py-5 align-middle text-center border-0">
      <div className="card-body">
        <h5 className="card-title display-1 m-5">{code}</h5>
        <h5 className="card-title display-2 m-4">{title}</h5>
        <p className="card-text m-5">{message}</p>
      </div>
    </div>
  );
}

export default PageNotFound;
