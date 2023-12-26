'use client' //quando tiver isso, ja sera declarado como interativo para usuário, será hidrtado com js

import { useState } from 'react'

export   function UserCount(){
  const [count,setCount] = useState(0)

  

  return(
    <div>
      <h1> User</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount((state) => state + 1)}>Macete</button>
      

    </div>
      
  )
}

