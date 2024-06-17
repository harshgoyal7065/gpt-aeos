"use client"

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useGptStore } from "@/store";
import { useState } from "react";

const MainChatArea = () => {
  const [userQuestion, setUserQuestion] = useState("");
  const updateConversationList = useGptStore((state: any) => state.updateConversationList);
  const activeTeamDetails = useGptStore((state: any) => state.activeTeamDetails);

  const askQuestion = async () => {
    updateConversationList(userQuestion.substring(0,50));
    const createQuestionResponse = await fetch("/api/conversations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        team_id: activeTeamDetails.team_id,
        conversation_title: userQuestion.substring(0,50)
      })
    })

    if(createQuestionResponse.status === 200) {
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

      const conversationResponse = await createQuestionResponse.json();
      if(true || response.status === 200) {
        const res = await response.json();
        const createConversationDetailsResponse = await fetch("/api/conversation-details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            question: userQuestion,
            answer: 'This is a random testing message',
            conversation_id: conversationResponse.data.id
          })
        })
      }

    }
  }
  return (
    <div className="h-full">
        <div className="flex-1"></div>
      <div className="w-10/12 m-auto flex gap-5">
        <div className="flex-[4_1_0%]">
          <TextInput placeholder="Enter your question" value={userQuestion} onChange={(e) => setUserQuestion(e?.target.value as string)}/>
        </div>
        <div className="flex-[1_1_0%]">
          <Button text="Submit" onClick={askQuestion}/>
        </div>
      </div>
    </div>
  );
};

export default MainChatArea;
