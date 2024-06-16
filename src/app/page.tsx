import MainChatArea from "@/layout/MainChatArea";
import Sidebar from "@/layout/Sidebar";

export default function Home() {
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
