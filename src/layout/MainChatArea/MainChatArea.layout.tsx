"use client";

import Button from "@/components/Button";
import NameAvatar from "@/components/NameAvatar";
import TextInput from "@/components/TextInput";
import { useGptStore } from "@/store";
import { useState } from "react";

const MainChatArea = () => {
  const [userQuestion, setUserQuestion] = useState("");
  const updateConversationList = useGptStore(
    (state: any) => state.updateConversationList
  );
  const activeTeamDetails = useGptStore(
    (state: any) => state.activeTeamDetails
  );
  const updateActiveTeamDetails = useGptStore(
    (state: any) => state.updateActiveTeamDetails
  );
  const activeConversation = useGptStore(
    (state: any) => state.activeConversation
  );
  const updateActiveConversation = useGptStore(
    (state: any) => state.updateActiveConversation
  );
  const user = useGptStore((state: any) => state.user);

  const askQuestion = async () => {
    const token = localStorage.getItem("token");
    let conversationId = "";
    setUserQuestion("");

    if (!activeConversation) {
      updateConversationList(userQuestion.substring(0, 50));

      const createQuestionResponse = await fetch("/api/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          team_id: activeTeamDetails.team_id,
          conversation_title: userQuestion.substring(0, 50),
        }),
      });

      if (createQuestionResponse.status === 200) {
        const conversationResponse = await createQuestionResponse.json();
        conversationId = conversationResponse.conversation.id;
      } else {
        alert("Something went wrong!");
        return;
      }
    } else {
      conversationId = activeConversation[0].conversation_id;
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: userQuestion}],
        temperature: 0.7
      })
    })

    if (response.status === 200) {
      const gptRes = await response.json();
      const createConversationDetailsResponse = await fetch(
        "/api/conversation-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            question: userQuestion,
            answer: gptRes.choices[0].message.content,
            conversation_id: conversationId,
            team_id: activeTeamDetails.team_id,
          }),
        }
      );

      if (createConversationDetailsResponse.status === 200) {
        const res = await createConversationDetailsResponse.json();
        if (activeConversation) {
          updateActiveConversation([
            ...activeConversation,
            { ...res.question_answer },
          ]);
        } else {
          updateActiveConversation([res.question_answer]);
        }
        const currentCredits = activeTeamDetails.available_credit;
        updateActiveTeamDetails({
          ...activeTeamDetails,
          available_credit: currentCredits,
        });
      }
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex justify-between w-10/12">
        <button>
          <NameAvatar name={user?.name} />
        </button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="w-10/12 m-auto">
          {activeConversation?.map((conversation: any) => (
            <>
              <div className="border border-white-primary text-white-primary p-3 rounded-lg mb-4">
                {conversation.question}
              </div>
              <div className="border border-gray-primary text-white-primary p-3 rounded-lg bg-text-slate-800 mb-8">
                {conversation.answer}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="w-10/12 m-auto flex gap-5 py-4">
        <div className="flex-[4_1_0%]">
          <TextInput
            placeholder="Enter your question"
            value={activeTeamDetails.available_credit ? userQuestion: 'You have exhausted your limit, your limit replenishes at 8:00AM IST'}
            onChange={(e) => setUserQuestion(e?.target.value as string)}
            disabled={!activeTeamDetails.available_credit}
          />
        </div>
        <div className="flex-[1_1_0%]">
          <Button
            text="Submit"
            onClick={askQuestion}
            disabled={!activeTeamDetails.available_credit}
          />
        </div>
      </div>
    </div>
  );
};

export default MainChatArea;
