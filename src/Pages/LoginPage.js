import logo from "../Assets/logo-login.png";
import PasswordInput from "../Components/PasswordInput";
import ProfilePicture from "../Components/ProfilePict";
import BackBtn from "../Components/BackBtn";
import Swal from "sweetalert2";
import { supabase } from "../supabaseClient";
import { useState } from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import classNames from "classnames";

export default function LoginPage() {
  let { path, url } = useRouteMatch();
  let history = useHistory();
  const parentPath = path.replace("/:page", "");
  const [session, setSession] = useState(null);
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
  async function signInWithEmail({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  }

  const [currentSlide, setCurrentSlide] = useState(1);
  const handleInput = (e) => {
    setUserCredential((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleNext = () => {};

  const handlePrev = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleRetrieveSession = async () => {
    const session = await supabase.auth.getSession();
  };

  const LoginForm = () => {
    const handleSubmit = async (values, { resetForm }) => {
      signInWithEmail({ email: values.email, password: values.password }).then(
        ({ data, error }) => {
          if (data.session != null) {
            history.push("/auth/complete");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            });
          }
        }
      );
    };
    return (
      <div className="w-full flex flex-[1] flex-col justify-center">
        <div className="flex flex-col px-44">
          <h1 className="text-dark-blue text-[25px] text-left font-poppins font-black pb-1">
            Selamat Datang
          </h1>
          <h2 className="text-dark-blue text-[15px] text-left font-poppins font-bold pb-8">
            Silahkan login untuk melanjutkan aktivitas
          </h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              touched,
              handleBlur,
              values,
              handleChange,
              setFieldValue,
            }) => (
              <Form className="grid grid-cols-12">
                <label className="text-dark-blue font-poppins font-thin text-sm pb-1 col-span-12">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Masukkan email"
                  name="email"
                  className="bg-gray-100 font-poppins text-xs rounded-md p-2 mb-3 outline-none col-span-12"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <label className="text-dark-blue font-poppins font-thin text-sm pb-1 col-span-12">
                  Password
                </label>
                <PasswordInput
                  wrapperClassName="col-span-12"
                  placeholder="Masukkan password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <button
                  type="submit"
                  className="col-span-12 bg-light-blue hover:bg-hv-light-blue p-1.5 text-md text-white font-poppins bold rounded-md my-5 mb-3"
                >
                  Sign In
                </button>
              </Form>
            )}
          </Formik>

          <p className="text-center py-1 font-spectral text-[#22C1DC] hover:text-[#2dcee9] cursor-pointer">
            Forgot password?
          </p>
        </div>
      </div>
    );
  };

  const CompleteProfileForm = () => {
    const handleSubmit = async (values) => {
      const { data } = await supabase.auth.getSession();
      const { error } = await supabase.from("user_data").insert({
        email: data.session.user.email,
        first_login: false,
        no_whatsapp: values.no_whatsapp,
        asal_sekolah: values.asal_sekolah,
        full_name: values.nama_lengkap,
      });
      if (error === null) {
        history.push("/auth/change-password");
      }
    };
    return (
      <div className="w-full h-screen flex flex-col justify-center">
        <div className="flex flex-col px-44 w-full">
          {/* <button onClick={handleRetrieveSession}>check token</button> */}
          <h1 className="text-dark-blue text-[25px] text-left font-poppins font-black pb-1">
            Hello, Maccaroni
          </h1>
          <h2 className="text-dark-blue text-[15px] text-left font-poppins font-bold pb-5">
            Silahkan lengkapi identitas Anda
          </h2>
          <ProfilePicture />
          <Formik
            initialValues={{ nama_lengkap: "", no_whatsapp: "", asal_sekolah: "" }}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="grid grid-cols-12">
                <label
                  htmlFor="nama_lengkap"
                  className="text-dark-blue font-poppins font-thin text-sm pb-1 col-span-12"
                >
                  Nama Lengkap
                </label>
                <Field
                  type="text"
                  name="nama_lengkap"
                  placeholder="Masukkan nama lengkap"
                  className={classNames(
                    `bg-gray-100 font-poppins text-xs rounded-md p-2 mb-3 outline-none col-span-12`,
                    {
                      "border-red-500":
                        errors.nama_lengkap && touched.nama_lengkap,
                    }
                  )}
                />

                <label
                  htmlFor="no_whatsapp"
                  className="text-dark-blue font-poppins font-thin text-sm pb-1 col-span-12"
                >
                  No. Whatsapp
                </label>
                <Field
                  type="text"
                  name="no_whatsapp"
                  placeholder="Masukkan No. Whatsapp"
                  onKeyPress={(event) => {
                    const regex = /^[0-9]*$/;
                    if (!regex.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  className={classNames(
                    `appearance-none leading-tight focus:outline-none bg-gray-100 font-poppins text-xs rounded-md p-2 mb-3 outline-none col-span-12`,
                    {
                      "border-red-500":
                        errors.no_whatsapp && touched.no_whatsapp,
                    }
                  )}
                />

                <label
                  htmlFor="asal_sekolah"
                  className="text-dark-blue font-poppins font-thin text-sm pb-1 col-span-12"
                >
                  Asal Sekolah
                </label>
                <Field
                  type="text"
                  name="asal_sekolah"
                  placeholder="Masukkan asal sekolah"
                  className={classNames(
                    `bg-gray-100 font-poppins text-xs rounded-md p-2 mb-5 outline-none col-span-12`,
                    {
                      "border-red-500":
                        errors.asal_sekolah && touched.asal_sekolah,
                    }
                  )}
                />

                <button
                  type="submit"
                  className="col-span-12 bg-light-blue hover:bg-hv-light-blue p-1.5 text-md text-white font-poppins bold rounded-md my-5 mb-3"
                >
                  Submit
                </button>
                <BackBtn className="col-span-12" onClick={handlePrev} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  };

  const ChangePasswordForm = () => {
    const handleSubmit = async (values) => {
      if (values.new_password !== values.confirm_new_password) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password do not match",
        });
        return;
      }

      const { user, error } = await supabase.auth.updateUser({
        password: values.new_password,
      });

      if (
        error === null &&
        values.new_password === values.confirm_new_password
      ) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Password has been changed!",
        }).then(() => {
          history.push("/dashboard");
        });
      }
      if (error?.status === 422) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      }
    };

    return (
      <div className="w-full h-screen flex flex-col justify-center">
        <div className="flex flex-col py-3 px-44 w-full">
          <Formik
            initialValues={{ new_password: "", confirm_new_password: "" }}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              touched,
              handleBlur,
              values,
              handleChange,
              setFieldValue,
            }) => (
              <Form className="grid grid-cols-12">
                <label
                  htmlFor="password_baru"
                  className="text-dark-blue font-poppins font-thin text-sm pb-1 col-span-12"
                >
                  Password Baru
                </label>
                <PasswordInput
                  wrapperClassName="col-span-12 mb-"
                  placeholder="Masukkan password"
                  name="new_password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.new_password}
                />

                <label
                  htmlFor="konfirmasi_password_baru"
                  className="text-dark-blue font-poppins font-thin text-sm pb-1 col-span-12"
                >
                  Konfirmasi Password Baru
                </label>
                <PasswordInput
                  wrapperClassName="col-span-12"
                  placeholder="Masukkan password"
                  name="confirm_new_password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm_new_password}
                />
                <button
                  type="submit"
                  className="col-span-12 bg-light-blue hover:bg-hv-light-blue p-1.5 text-md text-white font-poppins bold rounded-md mt-10 mb-2.5"
                >
                  Confirm
                </button>
                <BackBtn className="col-span-12" onClick={handlePrev} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 h-screen flex flex-col justify-center items-center bg-dark-blue gap-[20px] desktop-only">
        <h1 className="text-white text-[30px] font-patua">INTERN MANAGEMENT</h1>
        <img src={logo} alt="" className="w-[250px] h-[300px]" />
      </div>
      <div className="lg:w-1/2 h-screen flex flex-col justify-center items-center">
        {/* {content} */}
        <Switch>
          <Route path={`${parentPath}/login`}>
            <LoginForm />
          </Route>
          <Route path={`${parentPath}/complete`}>
            <CompleteProfileForm />
          </Route>
          <Route path={`${parentPath}/change-password`}>
            <ChangePasswordForm />
          </Route>
        </Switch>
      </div>
    </section>
  );
}
