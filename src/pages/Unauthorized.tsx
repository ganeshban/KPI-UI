import PageNotFound from "./PageNotFound";

function Unauthorized() {
  return (
    <PageNotFound
      code={403}
      title="UNAUTHORIZED"
      message="you don't have enough permission to view this page."
    />
  );
}

export default Unauthorized;
