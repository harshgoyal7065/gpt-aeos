"use client"

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

const MainChatArea = () => {
  return (
    <div className="h-full">
        <div className="flex-1"></div>
      <div className="w-10/12 m-auto flex gap-5">
        <div className="flex-[4_1_0%]">
          <TextInput placeholder="Enter your question" value="radnome"/>
        </div>
        <div className="flex-[1_1_0%]">
          <Button text="Submit" onClick={() => {}}/>
        </div>
      </div>
    </div>
  );
};

export default MainChatArea;
