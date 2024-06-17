"use client";

import InfoCard from "@/components/InfoCard";
import Modal from "@/components/Modal";
import Tabs from "@/components/Tabs";
import { useGptStore } from "@/store";
import { useState } from "react";

const Sidebar = () => {
  const conversationList = useGptStore(
    (state: any) => state.activeTeamDetails.conversationList
  );
  const activeTeamDetails = useGptStore(
    (state: any) => state.activeTeamDetails
  );
  const user = useGptStore((state: any) => state.user);
  const updateActiveConversation = useGptStore(
    (state: any) => state.updateActiveConversation
  );
  const teamList = useGptStore((state: any) => state.teamList);
  console.log(teamList);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const setActiveConversation = async (id: any) => {
    const token = localStorage.getItem("token");
    const createQuestionResponse = await fetch(
      `/api/conversation-details?conversation_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (createQuestionResponse.status === 200) {
      const response = await createQuestionResponse.json();
      updateActiveConversation(response.question_answers);
    }
  };

  return (
    <div className="border rounded-lg border-gray-500 flex flex-col justify-between h-full">
      <div>
        <h1 className="text-6xl font-bold text-center p-3">aeogpt.</h1>
        {conversationList?.map((conversation: any) => (
          <div key={conversation.id}>
            <Tabs
              text={conversation.conversation_title}
              handleTabClick={() => setActiveConversation(conversation.id)}
            />
          </div>
        ))}
      </div>
      <div className="w-11/12 mx-auto p-3">
        <button onClick={() => setIsModalOpen(true)}>
          <InfoCard
            name={user?.name}
            teamName={activeTeamDetails?.team_name}
            role={activeTeamDetails?.role_name}
          />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Select your team
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">Your content here.</p>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
