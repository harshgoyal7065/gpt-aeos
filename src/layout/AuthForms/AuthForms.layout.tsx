"use client";

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useGptStore } from "@/store";
import { useState } from "react";
import { AuthFormProps } from "./AuthForms";
// import sendEmail from "../../../utils/email"

const AuthForms = (props: AuthFormProps) => {
  const { children } = props;
  const [email, setEmail] = useState("harsh@gmail.com");
  const [password, setPassword] = useState("harsh");
  const [name, setName] = useState("harsh");
  const [currentStep, setCurrentStep] = useState(1);
  const [enteredToken, setEnteredToken] = useState("");

  const updateUser = useGptStore((state: any) => state.updateUser);
  const user = useGptStore((state: any) => state.user);

  const handleSendEmailConfirmation = async () => {
    let token = Math.floor(Math.random() * 10000);
    token.toString().padStart(4, "0");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, token, action: "signup-confirmation" }),
    });

    if (res.status === 200) {
      updateUser({ name, email, password, token });
      sessionStorage.setItem("otp", `${token}`);
      setCurrentStep(2);
    }
  };

  const handleSignup = async () => {
    const sentToken = sessionStorage.getItem("otp");
    if (sentToken === enteredToken) {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
          password: user.password,
          action: "signup",
        }),
      });

      if (res.status === 200) {
        sessionStorage.removeItem("otp");
        setCurrentStep(3);
      }
    }

    alert("Wrong OTP added, please try again");
  };

  const handleTeamCreate = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        name: user.name,
        password: user.password,
        action: "signup",
      }),
    });

    if (res.status === 200) {
      setCurrentStep(3);
    }
  };

  return (
    <div className="w-3/12 rounded-lg m-auto p-8 bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
        {children}
      {/* <form
        className="flex gap-5 flex-col"
      >
        {currentStep === 1 && (
          <>
            <TextInput placeholder="Name" />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <Button text="Sign up" onClick={handleSendEmailConfirmation} />
          </>
        )}

        {currentStep === 2 && (
          <>
            <TextInput placeholder="Email OTP" />
            <Button text="Verify" onClick={handleSignup} />
          </>
        )}

        {currentStep === 3 && (
          <>
            <TextInput placeholder="Team Name" />
            <Button text="Verify" onClick={handleTeamCreate} />
          </>
        )}
      </form> */}
    </div>
  );
};

export default AuthForms;
