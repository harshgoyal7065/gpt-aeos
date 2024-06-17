"use client"

import { useRouter } from "next/navigation";


const Home = () => {
  const router = useRouter();
  router.replace("/chat");
}

export default Home;