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
    <div className="text-dark-blue font-poppins">
      <h1 className="p-3">Sorry, the page you visited does not exist.</h1>
      <div className="flex items-center justify-center mt-72">
      <button onClick={handleGoBack} className=" w-[200px] py-1 rounded-md shadow-md hover:bg-gray-100">Back To Landing</button>
      </div>
    </div>
  );
};
export default Page404;