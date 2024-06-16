import InfoCard from "@/components/InfoCard"
import Tabs from "@/components/Tabs"

const Sidebar = () => {
  return (
    <div className="border rounded-lg border-gray-500 flex flex-col justify-between h-full">
        <div>
            <h1 className="text-6xl font-bold text-center p-3">aeogpt.</h1>
            {[1,2,3,4,5,6,7,8,9].map((val) => <div key={val}><Tabs/></div>)}
        </div>
        <div className="w-11/12 mx-auto p-3">
            <InfoCard name="Harsh Goyal" teamName="AEOS" role="owner" />
        </div>
    </div>
  )
}

export default Sidebar