import { ReactNode } from "react";

export default function RootLayout ({children} : {children: ReactNode}) {
  return(
    <html lang="pt-br">

      <head/>

      <body>
        <h1>Teste</h1>
        {children}
        </body>
    </html>
  )
}