"use client";
import InputField from "../shared/InputField";
import { useState } from "react";
import PasswordField from "../shared/PasswordField";
import ButtonComponent from "../shared/ButtonComponent";
import { useFormik } from "formik";
import * as yup from "yup";
import { redirect, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().required("Please enter your email !"),
  password: yup.string().required("Please enter your password !"),
});
const LoginPage = () => {
  const [passwordType, setPasswordType] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const { values, handleBlur, handleChange, touched, errors, handleSubmit } =
    useFormik({
      initialValues: loginValues,
      validationSchema: loginSchema,
      onSubmit: async () => {
        try {
          const response = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
          });

          if (response?.error) {
            showToastMessage(response?.error, "error");
          }
        } catch (error) {
          console.log(error);
        }
      },
    });

  const showToastMessage = (message: string, type: string) => {
    if (type === "success") {
      toast.success(message, {
        position: "bottom-right",
      });
    } else if (type === "error") {
      toast.error(message, {
        position: "bottom-right",
      });
    }
  };

  const handleClickPassword = () => {
    setPasswordType(!passwordType);
  };
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="shadow border w-[30%] shadow-slate-200 rounded-lg p-8  grid gap-8">
      <h2 className="text-center font-normal text-xl uppercase text-primary">
        Login Page
      </h2>

      <InputField
        name="email"
        value={values.email}
        label="Email"
        type="text"
        handleChange={handleChange}
        handleBlur={handleBlur}
        helperText={touched.email ? errors.email : ""}
        errors={touched.email && Boolean(errors.email)}
      />
      <PasswordField
        name="password"
        value={values.password}
        label="Password"
        type={passwordType ? "text" : "password"}
        handleClickPassword={handleClickPassword}
        handleChange={handleChange}
        handleBlur={handleBlur}
        helperText={touched.password ? errors.password : ""}
        errors={touched.password && Boolean(errors.password)}
      />
      <div className="text-end grid gap-2">
        <ButtonComponent handleClick={handleSubmit}>Login</ButtonComponent>
        <div>
          <span
            onClick={() => router.push("/register")}
            className="text-end text-sky-800 hover:border-b cursor-pointer hover:border-b-sky-800 text-xs font-normal"
          >
            Create an account
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
