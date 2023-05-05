import SubmitBtn from "../Components/SubmitBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import SelectCategory from "../Components/SelectCategory";
import ProfilePicture from "../Components/ProfilePict";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";

const UserBaru = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.push("/management-user");
  };
  return (
    <div className="grid grid-cols-1 gap-4 ml-16 mr-10 mt-5 pb-10 shadow-md rounded-md">
      <div className="flex flex-row items-center px-14 py-5 gap-2">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={handleGoBack}
          className="hover:cursor-pointer"
        />
        <p
          className={`text-left text-lg text-dark-blue font-bold font-poppins`}
        >
          User Baru
        </p>
      </div>
      <Formik
        initialValues={{
          category: "",
          email: "",
          password: "",
        }}
      >
        {({
          errors,
          touched,
          handleBlur,
          values,
          handleChange,
          setFieldValue,
        }) => (
          <Form>
            <div className="flex lg:flex-row sm:flex-col gap-4">
              <div className="flex flex-col px-14 w-full">
                <p className={`font-poppins text-black pt-2`}>
                  Kategori <span className="text-red">*</span>
                </p>
                <SelectCategory
                  name="category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                />
                <p className={`font-poppins text-black pt-2`}>
                  Email Aktif <span className="text-red">*</span>
                </p>
                <input
                  type="text"
                  required
                  placeholder="Masukkan email aktif"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`}
                />
                <p className={`font-poppins text-black pt-2`}>
                  Password <span className="text-red">*</span>
                </p>
                <input
                  type="password"
                  placeholder="Masukkan password"
                  name="password"
                  required
                  onChange={handleChange}
                  value={values.password}
                  className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`}
                />
              </div>
              <div className="flex flex-col px-14 w-full">
                <ProfilePicture />
              </div>
            </div>
            <SubmitBtn marginTop="6" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserBaru;
