"use client"

import withAuth from "@/components/withAuth";
import MainChatArea from "@/layout/MainChatArea";
import Sidebar from "@/layout/Sidebar";
import { useGptStore } from "@/store";
import { useEffect } from "react";

const Chat = () => {
  const updateTeamList = useGptStore((state: any) => state.updateTeamList);
  const updateActiveTeamDetails = useGptStore((state: any) => state.updateActiveTeamDetails);
  const updateUser = useGptStore((state: any) => state.updateUser);
  const user = useGptStore((state: any) => state.user);

  const getTeamInfo = async () => {
    const token = localStorage.getItem("token")
    const response = await fetch("/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    const res = await response.json();
    updateTeamList(res.data.userData.teamData);
    updateUser({ ...user, name: res.data.userData.user_name, email: res.data.userData.user_email})
    updateActiveTeamDetails(res.data.userData.teamData[0]);
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

export default withAuth(Chat);