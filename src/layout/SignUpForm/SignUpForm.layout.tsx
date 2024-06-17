"use client"

import { useState } from "react";
import AuthForms from "../AuthForms";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useGptStore } from "@/store";
import { redirect } from "next/navigation";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [enteredToken, setEnteredToken] = useState("");
  const [teamName, setTeamName] = useState("");

  const updateUser = useGptStore((state: any) => state.updateUser);
  const user = useGptStore((state: any) => state.user);

  const handleSendEmailConfirmation = async (e: any) => {
    e.preventDefault();
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
      setCurrentStep(2);
    }
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();
    if (user.token === enteredToken) {
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
        const response = await res.json();
        updateUser({ ...user, id: response.data.id });
        setCurrentStep(3);
      }
    }

    alert("Wrong OTP added, please try again");
  };

  const handleTeamCreate = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teamName,
        userId: user.id,
        action: "team",
      }),
    });

    if (res.status === 200) {
      redirect("/chat");
    }
  };

  return (
    <AuthForms>
      <h1 className="text-6xl font-bold text-white-primary mb-10 text-center">
        aeogpt.
      </h1>
      <h2 className="text-2xl font-semibold text-white-primary mb-4">
        Register your account
      </h2>
      {currentStep === 2 && (
        <p className="mb-8 text-gray-300">Enter OTP we have shared with you on your email to verify your account</p>
      )}
      {currentStep === 3 && (
        <p className="mb-8 text-gray-300">You are almost done! Create your team to start asking questions.</p>
      )}
      {currentStep === 1 && (
        <form
          className="flex gap-5 flex-col"
          onSubmit={handleSendEmailConfirmation}
        >
          <TextInput
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e?.target.value as string)}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e?.target.value as string)}
            type="email"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e?.target.value as string)}
            type="password"
          />
          <Button text="Register" onClick={handleSendEmailConfirmation} />
        </form>
      )}
      {currentStep === 2 && (
        <form
          className="flex gap-5 flex-col"
          onSubmit={handleSignup}
        >
          <TextInput
            placeholder="OTP (eg 1234)"
            value={enteredToken}
            onChange={(e) => setEnteredToken(e?.target.value as string)}
          />
          <Button text="Verify" onClick={handleSignup} />
        </form>
      )}
      {currentStep === 3 && (
        <form
          className="flex gap-5 flex-col"
          onSubmit={handleTeamCreate}
        >
          <TextInput
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e?.target.value as string)}
          />
          <Button text="Create Team" onClick={handleTeamCreate} />
        </form>
      )}
    </AuthForms>
  );
};

export default SignUpForm;
