import { Repos } from "@/components/Repo";
import { User } from "@/components/User";
import Link from "next/link";

export default function Home(){
  return(
    <div>
      <h1> Hello Vzap</h1>

      <User/>
      <Repos/>
      
      <Link href='/dashboard'> Dashboard</Link>


    </div>
      
  )
}