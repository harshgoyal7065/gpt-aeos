"use client";

import TextInput from "@/components/TextInput";
import AuthForms from "../AuthForms";
import Button from "@/components/Button";
import { useState } from "react";
import { validateEmail } from "../../../utils/common";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    if(!validateEmail(email)) {
        alert('Provide an email in proper format');
        return;
    }

    const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, action: "signin" })
    });

    if(res.status === 200) {
        console.log(res);
    }

    // const sentToken = sessionStorage.getItem("otp");
    // if (sentToken === enteredToken) {
    //   const res = await fetch("/api/auth", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: user.email,
    //       name: user.name,
    //       password: user.password,
    //       action: "signup",
    //     }),
    //   });

    //   if (res.status === 200) {
    //     sessionStorage.removeItem("otp");
    //     setCurrentStep(3);
    //   }
    // }

    // alert("Wrong OTP added, please try again");
  };

  return (
    <AuthForms>
      <h1 className="text-6xl font-bold text-white-primary mb-10 text-center">
        aeogpt.
      </h1>
      <h2 className="text-2xl font-semibold text-white-primary mb-4">
        Sign in to your account
      </h2>
      <form className="flex gap-5 flex-col" onSubmit={handleSignIn}>
        <TextInput placeholder="Email" value={email} onChange={(e) => setEmail(e?.target.value as string)} type="email"/>
        <TextInput placeholder="Password" value={password} onChange={(e) => setPassword(e?.target.value as string)} type="password"/>
        <Button text="Sign in" onClick={handleSignIn} />
      </form>
      <p className="mt-8">Want to have an account with us? Sign up </p>
    </AuthForms>
  );
};

export default SignInForm;
