import withAuth from "@/components/withAuth";
import MainChatArea from "@/layout/MainChatArea";
import Sidebar from "@/layout/Sidebar";

const Home = () => {
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

export default withAuth(Home);