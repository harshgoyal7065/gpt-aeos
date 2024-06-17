"use client"

import InfoCard from "@/components/InfoCard"
import Tabs from "@/components/Tabs"
import { useGptStore } from "@/store"

const Sidebar = () => {
  const conversationList = useGptStore((state: any) => state.conversationList);
  const activeTeamDetails = useGptStore((state: any) => state.activeTeamDetails);
  const user = useGptStore((state: any) => state.user);
  console.log(user);
  return (
    <div className="border rounded-lg border-gray-500 flex flex-col justify-between h-full">
        <div>
            <h1 className="text-6xl font-bold text-center p-3">aeogpt.</h1>
            {conversationList.map((conversation: any) => <div key={conversation}><Tabs text={conversation}/></div>)}
        </div>
        <div className="w-11/12 mx-auto p-3">
            <InfoCard name={user?.name} teamName={activeTeamDetails?.team_name} role={activeTeamDetails?.role_name} />
        </div>
    </div>
  )
}

export default Sidebar