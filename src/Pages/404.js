import React from "react";
import { useHistory } from "react-router-dom";

/**
 * membuat halaman untuk error not found
 *
 * @returns <Page404 />
 */
const Page404 = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.replace("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Sorry, the page you visited does not exist.</h1>
      <button onClick={handleGoBack}>Back To Landing</button>
    </div>
  );
};
export default Page404;
