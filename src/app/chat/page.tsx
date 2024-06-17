"use client"

import MainChatArea from "@/layout/MainChatArea";
import Sidebar from "@/layout/Sidebar";
import { useGptStore } from "@/store";
import { useEffect } from "react";

export default function Home() {
  const getTeamInfo = async () => {
    const token = localStorage.getItem("token")
    const response = await fetch("/api/team", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    const res = await response.json();
    console.log(res.data);

  }
  useEffect(() => {
    getTeamInfo();
  }, [])

  return (
    <div className="w-full flex bg-black-primary h-screen">
      <div className="flex-[1_1_0%]">
        <Sidebar />
      </div>
      <div className="flex-[5_1_0%]">
        <MainChatArea />
      </div>
    </div>
  );
}
