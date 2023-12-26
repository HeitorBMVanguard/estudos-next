

export  async function User(){
  const response = await fetch('https://api.github.com/users/HeitorBMarini', {
    //cache : 'no-store' - a cada novs requisição, não fica cache de outro usuário
    cache : 'no-store'
})

  const user = await response.json()


  return(
    <div>
      <h1> User</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      

    </div>
      
  )
}