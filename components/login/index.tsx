"use client";
import InputField from "../shared/InputField";
import { useState } from "react";
import PasswordField from "../shared/PasswordField";
import ButtonComponent from "../shared/ButtonComponent";
import { useFormik } from "formik";
import * as yup from "yup";
import { redirect, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { CircularProgress } from "@mui/material";
import toast from "react-hot-toast";
import Image from "next/image";

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
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  const { values, handleBlur, handleChange, touched, errors, handleSubmit } =
    useFormik({
      initialValues: loginValues,
      validationSchema: loginSchema,
      onSubmit: async () => {
        setloading(true);
        try {
          const response = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
          });
          if (response) {
            setloading(false);
          }

          if (response?.error) {
            toast.error(response?.error);
          }
        } catch (error) {
          console.log(error);
        }
      },
    });

  const handleClickPassword = () => {
    setPasswordType(!passwordType);
  };
  console.log(status);
  if (status === "loading") {
    return (
      <div>
        <CircularProgress color="inherit" />
      </div>
    );
  }
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="shadow border lg:w-[30%]  rounded-lg p-8  grid gap-8">
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
        onKeyDownCapture={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        helperText={touched.password ? errors.password : ""}
        errors={touched.password && Boolean(errors.password)}
      />
      <div className="text-end grid gap-3">
        <ButtonComponent handleClick={handleSubmit}>
          {loading ? (
            <CircularProgress color="inherit" size={35} />
          ) : (
            <p>Login</p>
          )}
        </ButtonComponent>
        <ButtonComponent handleClick={() => signIn("google")} color="info">
          <div className="flex gap-3 items-center  capitalize">
            <Image
              src={"/images/googleLogo.svg"}
              alt="googleIcon"
              aria-label="googleIcon"
              height={30}
              width={30}
            />
            <p>Google</p>
          </div>
        </ButtonComponent>
        {/* <ButtonComponent handleClick={() => signIn("github")} color="success">
          <div className="flex gap-3 items-center text-primary capitalize">
            <Image
              src={"/images/github.svg"}
              alt="githublogo"
              aria-label="githublogo"
              height={30}
              width={30}
            />
            <p>Github</p>
          </div>
        </ButtonComponent> */}

        <div>
          <span
            onClick={() => router.push("/register")}
            className="text-end  hover:border-b cursor-pointer hover:border-b-foreground text-xs font-normal"
          >
            Create an account
          </span>
        </div>
      </div>

      {/* <button
          className="w-full border shadow p-3 rounded"
          onClick={() => signIn("google")}
        > */}
      <div
        className="g-signin2"
        data-width="300"
        data-height="200"
        data-longtitle="true"
      >
        {/* </button> */}
      </div>
    </div>
  );
};

export default LoginPage;
