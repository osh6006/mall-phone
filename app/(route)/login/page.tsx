"use client";
import React, { useState } from "react";
import LoginForm from "./components/login-form";
import RegisterForm from "./components/register-form";

type formType = "login" | "register";

interface UserForm {
  email: string;
  password: string;
  passwordConfirm?: string;
}

const LoginPage = () => {
  const [formType, setFormType] = useState<formType>("login");
  const [formData, setFormData] = useState<UserForm>({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const formReset = () => {
    setFormData({
      email: "",
      password: "",
      passwordConfirm: "",
    });
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        {`${
          formType === "login" ? "로그인" : "회원 가입"
        } 후 서비스를 이용해 보세요`}
      </h1>

      {formType === "login" && (
        <LoginForm
          changeForm={setFormType}
          changeFormData={setFormData}
          formData={formData}
          formReset={formReset}
        />
      )}
      {formType === "register" && (
        <RegisterForm
          changeForm={setFormType}
          changeFormData={setFormData}
          formData={formData}
          formReset={formReset}
        />
      )}
    </div>
  );
};

export default LoginPage;
