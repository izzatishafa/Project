import logo from "../Assets/logo-login.png";
import PasswordInput from "../Components/PasswordInput";
import ProfilePicture from "../Components/ProfilePict";
import SubmitBtn from "../Components/SubmitBtn";
import BackBtn from "../Components/BackBtn";
import Swal from "sweetalert2";
import { supabase } from "../supabaseClient";
import { useState } from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import { Form, Formik } from "formik";

export default function LoginPage() {
  let { path, url } = useRouteMatch();
  let history = useHistory();
  const parentPath = path.replace("/:page", "");
  const [session, setSession] = useState(null);
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
  async function signInWithEmail({email, password}) {
    console.log(email, password)
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
  const handleNext = () => {
    
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleRetrieveSession = async () => {
    const session = await supabase.auth.getSession();
    console.log(session.data);
  };


  const LoginForm = () => {
    const handleSubmit = async (values, { resetForm }) => {
      console.log(values);
      signInWithEmail({email: values.email, password: values.password}).then(({ data, error }) => {
        if (data.session != null) {
          history.push("/auth/complete");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        }
      });
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
          initialValues={{email: '', password: ''}}
          onSubmit={handleSubmit}>
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
          <label className="text-dark-blue font-poppins font-thin text-sm pb-1">
            No. Whatsapp
          </label>
          <input
            type="text"
            placeholder="Masukkan No. Whatsapp"
            className="appearance-none leading-tight focus:outline-none bg-gray-100 font-poppins text-xs rounded-md p-2 mb-3 outline-none"
          />
          <label className="text-dark-blue font-poppins font-thin text-sm pb-1">
            Asal Sekolah
          </label>
          <input
            type="text"
            placeholder="Masukkan asal sekolah"
            className="bg-gray-100 font-poppins text-xs rounded-md p-2 mb-5 outline-none"
          />
        </div>
        <div className="px-24">
          <SubmitBtn onClick={handleNext} text="Submit" marginTop={8} />
          <BackBtn onClick={handlePrev} />
        </div>
      </div>
    );
  };

  const ChangePasswordForm = () => {
    return (
      <div className="w-full h-screen flex flex-col justify-center">
        <div className="flex flex-col py-3 px-44 w-full">
          <label className="text-dark-blue font-poppins font-thin text-sm pb-2">
            Password Baru
          </label>
          <PasswordInput placeholder="Masukkan Password Baru" />
          <label className="text-dark-blue font-poppins font-thin text-sm py-2">
            Konfirmasi password Baru
          </label>
          <PasswordInput placeholder="Konfirmasi password baru" />
        </div>
        <div className="pt-5 px-24">
          <SubmitBtn onClick={handleNext} text="confirm" />
          <BackBtn onClick={handlePrev} />
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
