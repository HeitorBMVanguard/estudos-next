import { Repos } from "@/components/Repo";
import { User } from "@/components/User";
import { UserCount } from "@/components/UserCount";

import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title : {
    default: 'Vanguard',
    template: '%s | Inbursa', //%s para poder receber string
  }
}

export default function Home(){
  return(
    <div>
      <h1> Hello Vzap</h1>
      <Link href='/auth/signin/'>Login</Link>

      <UserCount/>
      <Suspense fallback={<p> Carregando repositórios... </p>}>

      <Repos/>

     

      </Suspense>

      <Suspense fallback={<p> Carregando Usuário... </p>}>

      <User/>



      </Suspense>


      


    </div>
      
  )
}