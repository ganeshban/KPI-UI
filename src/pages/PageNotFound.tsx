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
    <div className="my-5 py-5 align-middle text-center border-0">
      <h5 className="display-1 m-5">{code}</h5>
      <h5 className="display-2 m-4">{title}</h5>
      <p className="m-5">{message}</p>
    </div>
  );
}

export default PageNotFound;
